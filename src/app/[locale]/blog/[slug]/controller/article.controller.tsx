import ArticleView from '@/app/[locale]/blog/[slug]/view/article.view';
import { ArticleProps } from '../../types';
import type { Metadata } from 'next';


export async function generateMetadata({ content }: { content: { title: string } }): Promise<Metadata> {
  const title = 'Jonatha Dev - Blog';
  const description = content?.title;
  const siteName = 'Jonatha Dev';

  return {
    metadataBase: new URL('https://jonathadev.vercel.app'),
    title,
    description,
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    openGraph: {
      title,
      description,
      siteName,
      type: 'website',
    },
  };
}


export default function ArticleController({
  content,
  tagPosts,
}: Readonly<ArticleProps>) {
  generateMetadata({ content });
  return <ArticleView content={content} tagPosts={tagPosts} />;
}
