import ArticleView from '@/app/[locale]/projects/[slug]/view/article.view';

import { getPost } from '@/services/notion';

export default async function ArticleController({
  params,
  searchParams,
}: Readonly<{
  params: { slug: string };
  searchParams: { [key: string]: string };
}>) {
  const contentPost = getPost(params.slug);
  const [content] = await Promise.all([contentPost]);

  return <ArticleView content={content} />;
}
