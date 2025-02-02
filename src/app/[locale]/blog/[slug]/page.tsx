import ArticleController from './controller/article.controller';
import { getPost, getPostsByTag } from '@/services/notion.blog';

interface PageProps {
  params: { slug: string; locale: string };
  searchParams?: { tag?: string };
}

export default async function Page({ params }: Readonly<PageProps>) {
  const { slug, locale } = params;

  const postPromise = getPost(slug, locale);

  const [postResult, tagPosts] = await Promise.all([
    postPromise,
    postPromise.then((result) => getPostsByTag(result.post.tags, slug, locale)),
  ]);

  return <ArticleController content={postResult.content} tagPosts={tagPosts} />;
}
