/* =======================================
 * Highlax WORKS ページ
 * URL: /src/app/works/page.tsx
 * Referenced in: /src/app/works/page.tsx
 * Created: 2026-06-11
 * Last updated: 2026-06-16
 * ======================================= */

import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageTitle from '@/components/common/PageTitle';
import WorksArchive from '@/components/works/WorksArchive';

export const metadata: Metadata = {
  title: '製作実績',
  description:
    'LAX PRODUCTIONSの製作実績一覧です。住居・店舗・商業施設の空間デザインや、オーダー家具・什器の事例をご紹介します。',
  alternates: {
    canonical: '/works',
  },
  openGraph: {
    title: '製作実績 | LAX PRODUCTIONS',
    description:
      'LAX PRODUCTIONSの製作実績一覧です。住居・店舗・商業施設の空間デザインや、オーダー家具・什器の事例をご紹介します。',
    url: '/works',
  },
  twitter: {
    title: '製作実績 | LAX PRODUCTIONS',
    description:
      'LAX PRODUCTIONSの製作実績一覧です。住居・店舗・商業施設の空間デザインや、オーダー家具・什器の事例をご紹介します。',
  },
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
