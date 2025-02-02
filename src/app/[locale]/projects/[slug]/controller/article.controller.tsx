import ArticleView from '@/app/[locale]/projects/[slug]/view/article.view';

import { getPost } from '@/services/notion.blog';

export default async function ArticleController({
  params,
  searchParams,
}: Readonly<{
  params: { slug: string; locale: string };
  searchParams: { [key: string]: string };
}>) {
  const { locale } = params;
  const contentPost = getPost(params.slug, locale);
  const [content] = await Promise.all([contentPost]);

  return <ArticleView content={content} />;
}
