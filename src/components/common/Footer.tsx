/* =======================================
 * Highlax Footer
 * URL: /src/components/common/Footer.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-06-09
 * Last updated: 2026-06-11
 * ======================================= */

import Image from 'next/image';
import styles from './Footer.module.scss';
import ExternalLink from '@/components/common/ExternalLink';
import ScrollLink from '@/components/common/ScrollLink';

const footerSlides = [
  '/images/footer/slide01.webp',
  '/images/footer/slide02.webp',
  '/images/footer/slide03.webp',
  '/images/footer/slide04.webp',
  '/images/footer/slide05.webp',
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <article
        className={styles.blockSlider}
        aria-label="フッターイメージスライド"
      >
        <div className={styles.sliderTrack}>
          {[0, 1].map((loopIndex) => (
            <div
              className={styles.sliderGroup}
              aria-hidden={loopIndex === 1}
              key={loopIndex}
            >
              {footerSlides.map((slidePath, slideIndex) => (
                <div
                  className={styles.sliderItem}
                  key={`${loopIndex}-${slidePath}`}
                >
                  <Image
                    src={slidePath}
                    alt={
                      loopIndex === 0
                        ? `フッターイメージ ${slideIndex + 1}`
                        : ''
                    }
                    width={765}
                    height={500}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <ExternalLink
          href="https://reserva.be/20260523"
          className={styles.linkContact}
        >
          <p>デザインやオーダーのご相談はこちら</p>
          <span>CONTACT</span>
          <i></i>
        </ExternalLink>
      </article>
      <ScrollLink className={styles.itemLogo} href="/">
        <svg role="img" aria-labelledby="svgTitleLogo">
          <title id="svgTitleLogo">LAX PRODUCTIONS</title>
          <use href="#svgLogo" />
        </svg>
      </ScrollLink>
      <div className={styles.copyRight}>
        © LAX PRODUCTION All Rights Reserved.
      </div>
    </footer>
  );
}
