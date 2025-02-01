import { GetServerSideProps } from 'next';
import ArticleElement from '@/app/[locale]/blog/components/article-element.component';
import BlogView from '../view/blog.view';
import { getAllPosts } from '@/services/notion';
import { useTranslations } from 'next-intl';
import EmptyBlog from '../components/empty-blog.component';
import { BlogControllerProps } from '../types';

export default function BlogController({ posts }: BlogControllerProps) {
  const t = useTranslations('Blog');

  const postLength = !!posts?.length;

  return postLength ? (
    <BlogView>
      {posts.map((post) => (
        <ArticleElement key={post.id} post={post} />
      ))}
    </BlogView>
  ) : (
    <EmptyBlog text={t('empty')} />
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
