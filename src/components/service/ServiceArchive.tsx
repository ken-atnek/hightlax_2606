/* =======================================
 * Highlax SERVICE 一覧
 * URL: /src/components/service/ServiceArchive.tsx
 * Referenced in: /src/app/service/page.tsx
 * Created: 2026-06-11
 * Last updated: 2026-06-12
 * ======================================= */

'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './ServiceArchive.module.scss';
import { serviceSections } from '@/data/service';
import ScrollLink from '@/components/common/ScrollLink';

type SlideState = 'active' | 'prev' | 'next' | 'far-prev' | 'far-next';

const getSlideState = (
  index: number,
  activeIndex: number,
  total: number
): SlideState => {
  const forwardDistance = (index - activeIndex + total) % total;
  const backwardDistance = (activeIndex - index + total) % total;

  if (forwardDistance === 0) {
    return 'active';
  }

  if (backwardDistance === 1) {
    return 'prev';
  }

  if (forwardDistance === 1) {
    return 'next';
  }

  return forwardDistance < backwardDistance ? 'far-next' : 'far-prev';
};

export default function ServiceArchive() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>(
    Object.fromEntries(serviceSections.map((section) => [section.id, 1]))
  );
  const archiveRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const triggerPointRef = useRef<number | null>(null);

  useEffect(() => {
    const updateNavState = () => {
      if (!archiveRef.current || !navRef.current) {
        return;
      }

      const rootFontSize = Number.parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      const fixedOffset = rootFontSize * 12;
      const archiveTop =
        archiveRef.current.getBoundingClientRect().top + window.scrollY;

      if (!isNavFixed || triggerPointRef.current === null) {
        const navTop =
          navRef.current.getBoundingClientRect().top + window.scrollY;
        const naturalOffset = navTop - archiveTop;
        triggerPointRef.current = archiveTop + naturalOffset - fixedOffset;
      }

      setIsNavFixed(window.scrollY >= (triggerPointRef.current ?? 0));
    };

    updateNavState();
    window.addEventListener('scroll', updateNavState, { passive: true });
    window.addEventListener('resize', updateNavState);

    return () => {
      window.removeEventListener('scroll', updateNavState);
      window.removeEventListener('resize', updateNavState);
    };
  }, [isNavFixed]);

  const handleMoveSlide = (sectionId: string, direction: 1 | -1) => {
    setActiveSlides((prev) => {
      const section = serviceSections.find((item) => item.id === sectionId);

      if (!section) {
        return prev;
      }

      const total = section.works.length;
      const nextIndex = ((prev[sectionId] ?? 1) + direction + total) % total;

      return {
        ...prev,
        [sectionId]: nextIndex,
      };
    });
  };

  return (
    <section className={styles.serviceArchive} ref={archiveRef}>
      <nav
        ref={navRef}
        className={clsx(styles.serviceNav, isNavFixed && styles.isFixed)}
        aria-label="サービスカテゴリナビゲーション"
      >
        {serviceSections.map((section) => (
          <ScrollLink
            key={section.id}
            href={`#${section.id}`}
            className={styles.navLink}
          >
            <span>{section.number}</span>
            <em>{section.title}</em>
            <strong className={styles.navLabelJa}>{section.titleJa}</strong>
          </ScrollLink>
        ))}
      </nav>

      <div className={styles.sectionList}>
        {serviceSections.map((section) => (
          <article key={section.id} id={section.id}>
            <div className={styles.sectionHead}>
              <p>{section.number}</p>
              <h2>{section.title}</h2>
              <span>{section.titleJa}</span>
            </div>

            <div className={styles.sliderWrap}>
              <div
                className={styles.sliderStage}
                aria-label={`${section.titleJa} の制作事例スライダー`}
              >
                <button
                  type="button"
                  className={clsx(styles.slideArrow, styles.prevArrow)}
                  aria-label={`${section.titleJa} の前の制作事例へ`}
                  onClick={() => handleMoveSlide(section.id, -1)}
                ></button>

                <div className={styles.slideViewport}>
                  {section.works.map((work, index) => {
                    const slideState = getSlideState(
                      index,
                      activeSlides[section.id] ?? 1,
                      section.works.length
                    );

                    return (
                      <div
                        key={work.id}
                        className={styles.slideCard}
                        data-slide-state={slideState}
                        aria-hidden={
                          slideState === 'far-prev' || slideState === 'far-next'
                        }
                      >
                        <Image
                          src={work.imageSrc}
                          alt={work.imageAlt}
                          fill
                          sizes="500px"
                        />
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className={clsx(styles.slideArrow, styles.nextArrow)}
                  aria-label={`${section.titleJa} の次の制作事例へ`}
                  onClick={() => handleMoveSlide(section.id, 1)}
                ></button>
              </div>
            </div>

            <div className={styles.sectionBody}>
              <h3>{section.title}</h3>
              <p
                className={clsx(styles.description, styles.pcOnly)}
                aria-hidden="true"
              >
                {section.descriptionLinesPc.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
              <p className={clsx(styles.description, styles.spOnly)}>
                {section.descriptionLinesSp.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
              <Link
                href={`/works/?category=${section.category}`}
                className={styles.linkWorks}
              >
                WORKS
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
