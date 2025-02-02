import ArticleView from '@/app/[locale]/blog/[slug]/view/article.view';
import { ArticleProps } from '../../types';

export default function ArticleController({
  content,
  tagPosts,
}: Readonly<ArticleProps>) {
  return <ArticleView content={content} tagPosts={tagPosts} />;
}

