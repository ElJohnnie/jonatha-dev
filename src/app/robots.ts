import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
    },
    sitemap: `${process.env.NEXT_PUBLIC_LOCAL_DOMAIN}/sitemap.xml` || 'https://jonathadev.com.br/sitemap.xml',
    host: process.env.NEXT_PUBLIC_LOCAL_DOMAIN || 'https://jonathadev.com.br',
  };
}
