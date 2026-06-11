/* =======================================
 * Highlax トップページ
 * URL: /src/app/page.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-06-04
 * Last updated: 2026-06-10
 * ======================================= */

import TopAbout from '@/components/top/TopAbout';
import TopHero from '@/components/top/TopHero';
import TopService from '@/components/top/TopService';
import TopWorks from '@/components/top/TopWorks';

export default function Home() {
  return (
    <>
      <TopHero />
      <TopAbout />
      <TopService />
      <TopWorks />
    </>
  );
}
