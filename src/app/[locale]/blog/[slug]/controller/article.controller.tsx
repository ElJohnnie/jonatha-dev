import { GetServerSideProps } from 'next';
import ArticleView from '@/app/[locale]/blog/[slug]/view/article.view';
import { getPost, getPostsByTag } from '@/services/notion.blog';
import { ArticleProps } from '../../types';

export default function ArticleController({
  content,
  tagPosts,
}: Readonly<ArticleProps>) {
  return <ArticleView content={content} tagPosts={tagPosts} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, query } = context;
  const slug = params?.slug as string;
  const tag = query.tag as string;

  const contentPost = getPost(slug);
  const postsByTag = getPostsByTag(tag, slug);
  const [content, tagPosts] = await Promise.all([contentPost, postsByTag]);

  return {
    props: {
      content,
      tagPosts,
    },
  };
};
