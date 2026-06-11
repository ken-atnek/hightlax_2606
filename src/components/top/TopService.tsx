/* =======================================
 * Highlax TOP Service セクション
 * URL: /src/components/top/TopService.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-06-10
 * Last updated: 2026-06-11
 * ======================================= */

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './TopService.module.scss';
import ScrollLink from '@/components/common/ScrollLink';
import { serviceSections } from '@/data/service';
import type { WorksItem } from '@/data/works';

const defaultSection = serviceSections[0];
const FADE_DURATION_MS = 500;

function pickRandomWorkImage(category: (typeof serviceSections)[number]['category']) {
  const works = serviceSections.find((section) => section.category === category)?.works ?? [];

  if (works.length === 0) {
    return null;
  }

  return works[Math.floor(Math.random() * works.length)];
}

export default function TopService() {
  const [activeWork, setActiveWork] = useState<WorksItem | null>(
    defaultSection.works[0] ?? null
  );
  const [previousWork, setPreviousWork] = useState<WorksItem | null>(null);

  useEffect(() => {
    if (!previousWork) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setPreviousWork(null);
    }, FADE_DURATION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [previousWork]);

  const handleImageChange = (category: (typeof serviceSections)[number]['category']) => {
    const nextWork = pickRandomWorkImage(category);

    if (!nextWork || nextWork.id === activeWork?.id) {
      return;
    }

    setPreviousWork(activeWork);
    setActiveWork(nextWork);
  };

  return (
    <section className={styles.containerService}>
      <h2>service</h2>
      <p className={styles.sidebarH2}>
        We design solutions for spaces,
        <br />
        furniture, and details.
      </p>
      <article>
        <div className={styles.innerNav}>
          <nav>
            {serviceSections.map((section) => (
              <ScrollLink
                key={section.id}
                href={`/service/#${section.id}`}
                onMouseEnter={() => handleImageChange(section.category)}
                onFocus={() => handleImageChange(section.category)}
              >
                <span>{section.title}</span>
                <h3>{section.titleJa}</h3>
              </ScrollLink>
            ))}
          </nav>
          <div className={styles.pageImage}>
            {previousWork && (
              <Image
                key={`previous-${previousWork.id}`}
                src={previousWork.imageSrc}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 34vw"
                className={`${styles.pageImageItem} ${styles.pageImageItemPrevious}`}
              />
            )}
            {activeWork && (
              <Image
                key={activeWork.id}
                src={activeWork.imageSrc}
                alt={activeWork.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 34vw"
                className={`${styles.pageImageItem} ${styles.pageImageItemCurrent}`}
              />
            )}
          </div>
        </div>
        <ScrollLink href="/service/" className={styles.pageLink}>
          View Services
        </ScrollLink>
      </article>
    </section>
  );
}
