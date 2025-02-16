import BlogController from './controller/blog.controller';
import { useLocale } from 'next-intl';

export default async function Page() {
  const locale = useLocale();
  const posts = await import('@/services/notion-blog.service').then((fetch) =>
    fetch.getAllPosts()
  );

  const filteredPosts = posts.filter((post) => post.lang === locale);

  return <BlogController posts={filteredPosts} />;
}
