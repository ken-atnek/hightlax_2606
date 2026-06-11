/* =======================================
 * Highlax 共通レイアウト
 * URL: /src/app/layout.tsx
 * Referenced in: /src/app/layout.tsx
 * Created: 2026-06-04
 * Last updated: 2026-06-11
 * ======================================= */

import type { Metadata } from 'next';
import SvgDefs from '@/components/SvgDefs';
import { IBM_Plex_Sans_JP, Radio_Canada_Big } from 'next/font/google';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { isRealProduction } from '@/lib/env';
import '@/styles/globals.scss';

const ibmPlexSansJp = IBM_Plex_Sans_JP({
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans-jp',
  display: 'swap',
});

const radioCanadaBig = Radio_Canada_Big({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-radio-canada-big',
  display: 'swap',
});

const siteName = 'HIGH LAX';
const siteDescription = 'HIGH LAX の新規サイトです。';
const metadataBase = isRealProduction
  ? new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'https://highlax.jp')
  : undefined;

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  ...(isRealProduction && {
    metadataBase,
    openGraph: {
      title: siteName,
      description: siteDescription,
      siteName,
      url: metadataBase?.toString(),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteName,
      description: siteDescription,
    },
  }),
  robots: isRealProduction ? 'index, follow' : 'noindex, nofollow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${ibmPlexSansJp.variable} ${radioCanadaBig.variable}`}
    >
      <body>
        <SvgDefs />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
