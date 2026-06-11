/* =======================================
 * Highlax Header
 * URL: /src/components/common/Header.tsx
 * Referenced in: /src/app/layout.tsx
 * Created: 2026-06-09
 * Last updated: 2026-06-11
 * ======================================= */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';
import ExternalLink from '@/components/common/ExternalLink';

export default function Header() {
  const pathname = usePathname();
  const isTopPage = pathname === '/';
  const logoMark = (
    <>
      <span className="sr-only">LAX PRODUCTIONS</span>
      <svg aria-hidden="true">
        <use href="#svgLogoMark" />
      </svg>
    </>
  );

  return (
    <header
      className={styles.containerHeader}
      data-page-type={isTopPage ? 'top' : 'sub'}
    >
      {isTopPage ? (
        <h1 className={styles.logo}>{logoMark}</h1>
      ) : (
        <div className={styles.logo}>
          <Link href="/" aria-label="LAX PRODUCTIONS">
            {logoMark}
          </Link>
        </div>
      )}
      <nav>
        <Link href="/service/">service</Link>
        <Link href="/works/">works</Link>
      </nav>
      <ExternalLink
        className={styles.snsInsta}
        href="https://www.instagram.com/laxproductions/?hl=ja"
      >
        <svg role="img" aria-labelledby="svgTitleInsta">
          <title id="svgTitleInsta">インスタグラムアイコン</title>
          <use href="#svgSnsInsta" />
        </svg>
      </ExternalLink>
      <ExternalLink
        className={styles.linkContact}
        href="https://reserva.be/20260523"
      >
        <span>contact</span>
      </ExternalLink>
    </header>
  );
}
