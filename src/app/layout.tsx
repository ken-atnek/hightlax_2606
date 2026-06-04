/* =======================================
 * Highlax 共通レイアウト
 * URL: /src/app/layout.tsx
 * Referenced in: /src/app/layout.tsx
 * Created: 2026-06-04
 * Last updated: 2026-06-04
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';

const siteName = 'HIGH LAX';
const siteDescription = 'HIGH LAX の新規サイトです。';
const metadataBase = process.env.NEXT_PUBLIC_METADATA_BASE
  ? new URL(process.env.NEXT_PUBLIC_METADATA_BASE)
  : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    siteName,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
