/* =======================================
 * Highlax Header
 * URL: /src/components/common/Header.tsx
 * Referenced in: /src/app/layout.tsx
 * Created: 2026-06-09
 * Last updated: 2026-06-12
 * ======================================= */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';
import ExternalLink from '@/components/common/ExternalLink';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [pageType, setPageType] = useState<'top' | 'sub'>('sub');
  const navRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuId = 'global-header-menu';

  const onClose = () => {
    setIsOpen(false);
  };

  const onToggle = () => {
    setIsOpen((current) => !current);
  };

  const logoMark = (
    <>
      <span className="sr-only">LAX PRODUCTIONS</span>
      <svg aria-hidden="true">
        <use href="#svgLogoMark" />
      </svg>
    </>
  );

  useEffect(() => {
    setPageType(pathname === '/' ? 'top' : 'sub');
    onClose();
  }, [pathname]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isOpen &&
        navRef.current &&
        buttonRef.current &&
        !navRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        onClose();
      }
    };
    document.addEventListener('click', handleOutsideClick, true);
    return () =>
      document.removeEventListener('click', handleOutsideClick, true);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={styles.header}
      data-page-type={pageType}
    >
        <div className={styles.logo}>
          <Link
            href="/"
            aria-label="LAX PRODUCTIONS"
            aria-current={pageType === 'top' ? 'page' : undefined}
          >
            {logoMark}
          </Link>
        </div>
        <article
          id={menuId}
          className={clsx(styles.menuPanel, isOpen && styles['is-open'])}
          ref={navRef}
        >
          <nav className={styles.nav}>
            <Link href="/service/" onClick={onClose}>
              service
            </Link>
            <Link href="/works/" onClick={onClose}>
              works
            </Link>
          </nav>
          <ExternalLink
            className={styles.snsInsta}
            href="https://www.instagram.com/laxproductions/?hl=ja"
          >
            <svg role="img" aria-labelledby="svgTitleInsta">
              <title id="svgTitleInsta">インスタグラムアイコン</title>
              <use href="#svgSnsInsta" />
            </svg>
            <span>Instagram</span>
          </ExternalLink>
          <ExternalLink
            className={styles.linkContact}
            href="https://reserva.be/20260523"
          >
            <span>contact</span>
          </ExternalLink>
          <div className={styles.copyright}>
            © LAX PRODUCTION All Rights Reserved.
          </div>
        </article>
        <button
          type="button"
          ref={buttonRef}
          className={clsx(styles.hamburgerButton, isOpen && styles['is-open'])}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label="メニューを開閉"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
    </header>
  );
}
