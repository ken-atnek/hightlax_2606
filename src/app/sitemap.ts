import type { MetadataRoute } from 'next';
import { isRealProduction } from '@/lib/env';

export const dynamic = 'force-static';

const metadataBase = process.env.NEXT_PUBLIC_METADATA_BASE || 'https://highlax.jp';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isRealProduction) {
    return [];
  }

  return [
    {
      url: `${metadataBase}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${metadataBase}/service/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${metadataBase}/works/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
