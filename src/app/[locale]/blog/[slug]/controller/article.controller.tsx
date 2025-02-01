import ArticleView from '@/app/[locale]/blog/[slug]/view/article.view';

import { getPost, getPostsByTag } from '@/services/notion';

export default async function ArticleController({
  params,
  searchParams,
}: Readonly<{
  params: { slug: string };
  searchParams: { [key: string]: string };
}>) {
  const contentPost = getPost(params.slug);
  const postsByTag = getPostsByTag(searchParams.tag, params.slug);
  const [content, tagPosts] = await Promise.all([contentPost, postsByTag]);

  return <ArticleView content={content} tagPosts={tagPosts} />;
}
