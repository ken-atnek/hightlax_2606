import type { MetadataRoute } from 'next';

const metadataBase =
  process.env.NEXT_PUBLIC_METADATA_BASE || 'https://highlax.jp';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${metadataBase}/sitemap.xml`,
  };
}
