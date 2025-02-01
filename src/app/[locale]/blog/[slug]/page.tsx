import ArticleController from './controller/article.controller';
import { getPost, getPostsByTag } from '@/services/notion.blog';

interface PageProps {
  params: { slug: string };
  searchParams: { tag: string };
}

export default async function Page({
  params,
  searchParams,
}: Readonly<PageProps>) {
  const slug = params.slug;
  const tag = searchParams.tag;

  const [content, tagPosts] = await Promise.all([
    getPost(slug),
    getPostsByTag(tag, slug),
  ]);

  return <ArticleController content={content} tagPosts={tagPosts} />;
}
