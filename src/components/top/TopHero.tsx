/* =======================================
 * Highlax TOP Hero セクション
 * URL: /src/components/top/TopHero.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-06-10
 * Last updated: 2026-06-10
 * ======================================= */

import styles from './TopHero.module.scss';

export default function TopHero() {
  return (
    <section className={styles.containerHero}>
      <div className={styles.itemLogo}>
        <svg role="img" aria-labelledby="svgTitleLogo">
          <title id="svgTitleLogo">LAX PRODUCTIONS</title>
          <use href="#svgLogo" />
        </svg>
      </div>
    </section>
  );
}
