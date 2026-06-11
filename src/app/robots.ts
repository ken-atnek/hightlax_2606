import type { MetadataRoute } from 'next';
import { isRealProduction } from '@/lib/env';

export const dynamic = 'force-static';

const metadataBase = process.env.NEXT_PUBLIC_METADATA_BASE || 'https://highlax.jp';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isRealProduction
      ? {
          userAgent: '*',
          allow: '/',
        }
      : {
          userAgent: '*',
          disallow: '/',
        },
    sitemap: `${metadataBase}/sitemap.xml`,
  };
}
