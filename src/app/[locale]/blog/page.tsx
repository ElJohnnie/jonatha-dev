import ArticleElement from '@/components/Sections/Blog/ArticleElement';
import { Blog, EmptyBlog } from '@/components/Sections';
import { getAllPosts } from '@/services/notion';
import { getTranslations } from 'next-intl/server';

interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  avatar: string;
  tags: string;
}

export default async function BlogPage() {
  const t = await getTranslations('Blog');
  const posts = await getAllPosts();

  const postLength = !!posts.length;

  return postLength ? (
    <Blog>
      {posts.map((post) => (
        <ArticleElement key={post.id} post={post} />
      ))}
    </Blog>
  ) : (
    <EmptyBlog text={t('empty')} />
  );
}
