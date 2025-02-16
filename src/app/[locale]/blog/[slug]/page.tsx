import ArticleController from './controller/article.controller';
import { getPost, getPostsByTag } from '@/services/notion-blog.service';
import { Metadata } from 'next';
import { getFirstImageUrl } from '@/utils/get-image-url.util';

interface PageProps {
  params: { slug: string; locale: string };
  searchParams?: { tag?: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, locale } = params;
  const postResult = await getPost(slug, locale);

  if (!postResult?.post) {
    return {
      title: 'Post não encontrado',
      description: 'O post que você está procurando não foi encontrado.',
    };
  }

  const { post, content } = postResult;
  const image = getFirstImageUrl(content);

  return {
    title: post.title,
    description: post.description || 'Descrição não disponível',
    openGraph: {
      title: post.title,
      description: post.description || 'Descrição não disponível',
      url: `/${locale}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: image ?? '__blank',
          alt: post.title,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || 'Descrição não disponível',
      images: [image ?? '__blank'],
    },
  };
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
