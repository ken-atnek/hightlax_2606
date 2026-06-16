/* =======================================
 * Highlax WORKS 一覧
 * URL: /src/components/works/WorksArchive.tsx
 * Referenced in: /src/app/works/page.tsx
 * Created: 2026-06-11
 * Last updated: 2026-06-12
 * ======================================= */

'use client';

import clsx from 'clsx';
import { useMemo, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './WorksArchive.module.scss';
import WorksCard from './WorksCard';
import {
  worksCategoryLabels,
  worksCategories,
  worksItems,
  type WorksCategory,
} from '@/data/works';

const filterOptions: Array<{ label: string; value: WorksCategory | 'all' }> = [
  { label: 'ALL', value: 'all' },
  { label: worksCategoryLabels.architecture, value: 'architecture' },
  {
    label: worksCategoryLabels['custom-furniture'],
    value: 'custom-furniture',
  },
  {
    label: worksCategoryLabels['laser-processing'],
    value: 'laser-processing',
  },
];

export default function WorksArchive() {
  const searchParams = useSearchParams();
  const searchParamsKey = searchParams.toString();
  const [selectedCategory, setSelectedCategory] = useState<{
    source: string;
    value: WorksCategory | 'all';
  } | null>(null);
  const initialCategory = useMemo<WorksCategory | 'all'>(() => {
    const category = searchParams.get('category');

    if (category && worksCategories.includes(category as WorksCategory)) {
      return category as WorksCategory;
    }

    return 'all';
  }, [searchParams]);
  const activeCategory =
    selectedCategory?.source === searchParamsKey
      ? selectedCategory.value
      : initialCategory;
  const [isFilterFixed, setIsFilterFixed] = useState(false);
  const archiveRef = useRef<HTMLElement | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const triggerPointRef = useRef<number | null>(null);

  useEffect(() => {
    const updateFilterState = () => {
      if (!archiveRef.current || !filterRef.current) {
        return;
      }

      const rootFontSize = Number.parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      const fixedOffset = rootFontSize * 12;
      const archiveTop =
        archiveRef.current.getBoundingClientRect().top + window.scrollY;

      if (!isFilterFixed || triggerPointRef.current === null) {
        const filterTop =
          filterRef.current.getBoundingClientRect().top + window.scrollY;
        const naturalOffset = filterTop - archiveTop;
        triggerPointRef.current = archiveTop + naturalOffset - fixedOffset;
      }

      setIsFilterFixed(window.scrollY >= (triggerPointRef.current ?? 0));
    };

    updateFilterState();
    window.addEventListener('scroll', updateFilterState, { passive: true });
    window.addEventListener('resize', updateFilterState);

    return () => {
      window.removeEventListener('scroll', updateFilterState);
      window.removeEventListener('resize', updateFilterState);
    };
  }, [isFilterFixed]);

  const visibleItems =
    activeCategory === 'all'
      ? worksItems
      : worksItems.filter((item) => item.category === activeCategory);

  return (
    <section className={styles.worksArchive} ref={archiveRef}>
      <div
        ref={filterRef}
        className={clsx(styles.listFilter, isFilterFixed && styles.isFixed)}
        role="toolbar"
        aria-label="製作実績カテゴリフィルタ"
      >
        {filterOptions.map((option) => (
          <button
            type="button"
            key={option.value}
            className={styles.filterButton}
            data-active={activeCategory === option.value}
            onClick={() =>
              setSelectedCategory({
                source: searchParamsKey,
                value: option.value,
              })
            }
          >
            {option.label}
          </button>
        ))}
      </div>

      <ul className={styles.listWorks}>
        {visibleItems.map((item) => (
          <WorksCard key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
