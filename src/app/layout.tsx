/* =======================================
 * Highlax 共通レイアウト
 * URL: /src/app/layout.tsx
 * Referenced in: /src/app/layout.tsx
 * Created: 2026-06-04
 * Last updated: 2026-06-16
 * ======================================= */

import clsx from 'clsx';
import type { Metadata } from 'next';
import Script from 'next/script';
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

const siteName = 'LAX PRODUCTIONS';
const siteDescription =
  'LAX PRODUCTIONSは、阿蘇を拠点に住居・店舗・商業施設の建築デザイン、オーダー家具・什器、レーザー加工を行うデザインスタジオです。空間に馴染む唯一無二のかたちを提案します。';
const googleAnalyticsId = 'G-6KLLCE22KR';
const metadataBase = isRealProduction
  ? new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'https://highlax.jp')
  : undefined;

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  icons: {
    icon: [
      {
        url: '/favicon/favicon-light.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon/favicon-dark.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  ...(isRealProduction && {
    metadataBase,
    openGraph: {
      title: siteName,
      description: siteDescription,
      siteName,
      url: metadataBase?.toString(),
      type: 'website',
      images: [
        {
          url: '/images/ogp.jpg',
          width: 1200,
          height: 630,
          alt: 'LAX PRODUCTIONSのOGP画像',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteName,
      description: siteDescription,
      images: ['/images/ogp.jpg'],
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
      className={clsx(ibmPlexSansJp.variable, radioCanadaBig.variable)}
    >
      <body>
        {isRealProduction && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        )}
        <SvgDefs />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
