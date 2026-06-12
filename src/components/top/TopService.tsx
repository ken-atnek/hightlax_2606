/* =======================================
 * Highlax TOP Service セクション
 * URL: /src/components/top/TopService.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-06-10
 * Last updated: 2026-06-12
 * ======================================= */

'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './TopService.module.scss';
import ScrollLink from '@/components/common/ScrollLink';
import { serviceSections } from '@/data/service';
import type { WorksItem } from '@/data/works';

const defaultSection = serviceSections[0];
const FADE_DURATION_MS = 500;
const initialMobileWorks = Object.fromEntries(
  serviceSections.map((section) => [section.category, section.works[0] ?? null])
) as Record<(typeof serviceSections)[number]['category'], WorksItem | null>;

function pickRandomWorkImage(
  category: (typeof serviceSections)[number]['category']
) {
  const works =
    serviceSections.find((section) => section.category === category)?.works ??
    [];

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
  const [mobileWorks, setMobileWorks] =
    useState<Record<(typeof serviceSections)[number]['category'], WorksItem | null>>(
      initialMobileWorks
    );

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setMobileWorks((currentWorks) => {
        const nextWorks = serviceSections.reduce<
          Record<(typeof serviceSections)[number]['category'], WorksItem | null>
        >((accumulator, section) => {
          accumulator[section.category] = pickRandomWorkImage(section.category);
          return accumulator;
        }, { ...currentWorks });

        return nextWorks;
      });
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

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

  const handleImageChange = (
    category: (typeof serviceSections)[number]['category']
  ) => {
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
        We design solutions <br className="sp" />
        for spaces,
        <br />
        furniture, and details.
      </p>
      <article>
        <div className={styles.innerNav}>
          <nav>
            {serviceSections.map((section) => {
              const mobileWork = mobileWorks[section.category];
              const titleLines = section.title.split(' ');

              return (
                <ScrollLink
                  key={section.id}
                  href={`/service/#${section.id}`}
                  onMouseEnter={() => handleImageChange(section.category)}
                  onFocus={() => handleImageChange(section.category)}
                >
                  {mobileWork && (
                    <div className={styles.spImage}>
                      <Image
                        src={mobileWork.imageSrc}
                        alt=""
                        fill
                        sizes="100vw"
                        className={styles.spImageItem}
                      />
                    </div>
                  )}
                  <div className={styles.linkContent}>
                    <span className={styles.titlePc}>{section.title}</span>
                    <span className={styles.titleSp} aria-hidden="true">
                      {titleLines.map((line) => (
                        <span key={`${section.id}-${line}`}>{line}</span>
                      ))}
                    </span>
                    <h3>{section.titleJa}</h3>
                  </div>
                </ScrollLink>
              );
            })}
          </nav>
          <div className={styles.pageImage}>
            {previousWork && (
              <Image
                key={`previous-${previousWork.id}`}
                src={previousWork.imageSrc}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 34vw"
                className={clsx(
                  styles.pageImageItem,
                  styles.pageImageItemPrevious
                )}
              />
            )}
            {activeWork && (
              <Image
                key={activeWork.id}
                src={activeWork.imageSrc}
                alt={activeWork.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 34vw"
                className={clsx(
                  styles.pageImageItem,
                  styles.pageImageItemCurrent
                )}
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
