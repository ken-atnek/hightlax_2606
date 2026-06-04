import type { MetadataRoute } from 'next';

const metadataBase =
  process.env.NEXT_PUBLIC_METADATA_BASE || 'https://highlax.jp';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${metadataBase}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
