/* =======================================
 * Highlax TOP Works セクション
 * URL: /src/components/top/TopWorks.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-06-11
 * Last updated: 2026-06-12
 * ======================================= */

'use client';

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { worksItems, type WorksItem } from '@/data/works';
import ScrollLink from '@/components/common/ScrollLink';
import styles from './TopWorks.module.scss';

const slotVariants = [
  'edgeLeft',
  'subLeft',
  'mainLeft',
  'center',
  'mainRight',
  'subRight',
  'edgeRight',
] as const;
const slotIntervalBases = [5200, 6100, 6800, 7400, 5900, 6600, 7800] as const;
const slotInitialDelays = [0, 500, 900, 1500, 2200, 2900, 3500] as const;
const FADE_DURATION_MS = 2400;
const SLOT_VARIANT_CLASS_NAMES: Record<(typeof slotVariants)[number], string> =
  {
    edgeLeft: styles.itemEdgeLeft,
    subLeft: styles.itemSubLeft,
    mainLeft: styles.itemMainLeft,
    center: styles.itemCenter,
    mainRight: styles.itemMainRight,
    subRight: styles.itemSubRight,
    edgeRight: styles.itemEdgeRight,
  };

type SlotVariant = (typeof slotVariants)[number];

type GallerySlot = {
  current: WorksItem;
  previous: WorksItem | null;
  variant: SlotVariant;
};

function createInitialSlots(
  sourceItems: WorksItem[] = worksItems
): GallerySlot[] {
  return slotVariants.map((variant, index) => ({
    variant,
    current: sourceItems[index % sourceItems.length],
    previous: null,
  }));
}

function pickNextWork(excludeIds: string[]) {
  const candidateItems = worksItems.filter(
    (item) => !excludeIds.includes(item.id)
  );
  const sourceItems = candidateItems.length > 0 ? candidateItems : worksItems;

  return sourceItems[Math.floor(Math.random() * sourceItems.length)];
}

export default function TopWorks() {
  const [gallerySlots, setGallerySlots] = useState<GallerySlot[]>(() =>
    createInitialSlots()
  );
  const gallerySlotsRef = useRef(gallerySlots);

  useEffect(() => {
    gallerySlotsRef.current = gallerySlots;
  }, [gallerySlots]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const switchTimeoutIds: number[] = [];
    const cleanupTimeoutIds: number[] = [];

    const scheduleSlotChange = (slotIndex: number, delay: number) => {
      const timeoutId = window.setTimeout(() => {
        const currentSlots = gallerySlotsRef.current;
        const targetSlot = currentSlots[slotIndex];

        if (!targetSlot) {
          return;
        }

        const nextWork = pickNextWork([
          ...currentSlots.map((slot) => slot.current.id),
          ...(targetSlot.previous ? [targetSlot.previous.id] : []),
        ]);

        setGallerySlots((previousSlots) =>
          previousSlots.map((slot, index) =>
            index === slotIndex
              ? {
                  ...slot,
                  previous: slot.current,
                  current: nextWork,
                }
              : slot
          )
        );

        cleanupTimeoutIds.push(
          window.setTimeout(() => {
            setGallerySlots((previousSlots) =>
              previousSlots.map((slot, index) =>
                index === slotIndex
                  ? {
                      ...slot,
                      previous: null,
                    }
                  : slot
              )
            );
          }, FADE_DURATION_MS)
        );

        scheduleSlotChange(
          slotIndex,
          slotIntervalBases[slotIndex] + Math.floor(Math.random() * 1200)
        );
      }, delay);

      switchTimeoutIds.push(timeoutId);
    };

    slotVariants.forEach((_, index) => {
      scheduleSlotChange(
        index,
        slotInitialDelays[index] + slotIntervalBases[index]
      );
    });

    return () => {
      switchTimeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
      cleanupTimeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  return (
    <section className={styles.containerWorks}>
      <div className={styles.boxHead}>
        <h2>WORKS</h2>
        <p>
          空間に残る質感、暮らしに馴染むかたち。
          <br />
          住まいから家具、細部の意匠まで、これまで手がけた事例をご紹介します。
        </p>
        <ScrollLink href="/works/">All Works</ScrollLink>
      </div>
      <article aria-label="制作事例イメージ">
        <div className={styles.innerImage}>
          {gallerySlots.map((slot) => (
            <div
              key={slot.variant}
              className={clsx(
                styles.itemWork,
                SLOT_VARIANT_CLASS_NAMES[slot.variant]
              )}
              aria-hidden="true"
            >
              <div className={styles.imageFrame}>
                {slot.previous && (
                  <Image
                    key={`previous-${slot.variant}-${slot.previous.id}`}
                    src={slot.previous.imageSrc}
                    alt=""
                    fill
                    sizes="330px"
                    className={clsx(
                      styles.imageItem,
                      styles.imageItemPrevious
                    )}
                  />
                )}
                <Image
                  key={`current-${slot.variant}-${slot.current.id}`}
                  src={slot.current.imageSrc}
                  alt=""
                  fill
                  sizes="330px"
                  className={clsx(
                    styles.imageItem,
                    styles.imageItemCurrent
                  )}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.boxText}>
          <h3>“Make it yours”</h3>
          <p>
            Made for the way you live,work, and spend <br className="sp" />
            your time.
            <br className="pc" />
            Each piece is shaped around you.
          </p>
        </div>
      </article>
    </section>
  );
}
