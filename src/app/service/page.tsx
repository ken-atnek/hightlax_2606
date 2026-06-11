/* =======================================
 * Highlax SERVICE ページ
 * URL: /src/app/service/page.tsx
 * Referenced in: /src/app/service/page.tsx
 * Created: 2026-06-11
 * Last updated: 2026-06-11
 * ======================================= */

import type { Metadata } from 'next';
import PageTitle from '@/components/common/PageTitle';
import ServiceArchive from '@/components/service/ServiceArchive';

export const metadata: Metadata = {
  title: 'SERVICE',
  description: 'HIGH LAX のサービス一覧です。',
};

export default function ServicePage() {
  return (
    <main>
      <PageTitle title="SERVICE" />
      <ServiceArchive />
    </main>
  );
}
