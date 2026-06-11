/* =======================================
 * Highlax ページ遷移テンプレート
 * URL: /src/app/template.tsx
 * Referenced in: /src/app/layout.tsx
 * Created: 2026-06-11
 * Last updated: 2026-06-11
 * ======================================= */

'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }, [pathname]);

  return <>{children}</>;
}
