/* =======================================
 * Highlax WORKS ページ
 * URL: /src/app/works/page.tsx
 * Referenced in: /src/app/works/page.tsx
 * Created: 2026-06-11
 * Last updated: 2026-06-11
 * ======================================= */

import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageTitle from '@/components/common/PageTitle';
import WorksArchive from '@/components/works/WorksArchive';

export const metadata: Metadata = {
  title: 'WORKS',
  description: 'HIGH LAX の制作実績一覧です。',
};

export default function WorksPage() {
  return (
    <main>
      <PageTitle title="WORKS" />
      <Suspense fallback={null}>
        <WorksArchive />
      </Suspense>
    </main>
  );
}
