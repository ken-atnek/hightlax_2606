/* =======================================
 * Highlax SERVICE ページ
 * URL: /src/app/service/page.tsx
 * Referenced in: /src/app/service/page.tsx
 * Created: 2026-06-11
 * Last updated: 2026-06-16
 * ======================================= */

import type { Metadata } from 'next';
import PageTitle from '@/components/common/PageTitle';
import ServiceArchive from '@/components/service/ServiceArchive';

export const metadata: Metadata = {
  title: 'サービス',
  description:
    'LAX PRODUCTIONSのサービス一覧です。阿蘇を拠点に、建築デザイン、オーダー家具・什器、レーザー加工を行っています。',
  alternates: {
    canonical: '/service',
  },
  openGraph: {
    title: 'サービス | LAX PRODUCTIONS',
    description:
      'LAX PRODUCTIONSのサービス一覧です。阿蘇を拠点に、建築デザイン、オーダー家具・什器、レーザー加工を行っています。',
    url: '/service',
  },
  twitter: {
    title: 'サービス | LAX PRODUCTIONS',
    description:
      'LAX PRODUCTIONSのサービス一覧です。阿蘇を拠点に、建築デザイン、オーダー家具・什器、レーザー加工を行っています。',
  },
};

export default function ServicePage() {
  return (
    <main>
      <PageTitle title="SERVICE" />
      <ServiceArchive />
    </main>
  );
}
