import { languages } from '@/locale/languages';
import { MetadataRoute } from 'next';

export default async function sitemap() {
  const langs = Object.keys(languages);
  const pages = ['about', 'blog', 'projects'];
  const host = process.env.NEXT_PUBLIC_LOCAL_DOMAIN;

  let routes: MetadataRoute.Sitemap = [];
  langs.forEach((lang) => {
    pages.forEach((page) => {
      routes.push({
        url: `${host}/${lang}/${page}`,
        lastModified: new Date().toISOString().split('T')[0],
      });
    });
  });

  return routes;
}
