import ArticleElement from '@/components/Sections/Blog/ArticleElement';
import { Blog } from '@/components/Sections';
import { getAllPosts } from '@/services/notion';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Blog>
      {posts.map((post) => (
        <ArticleElement key={post.id} post={post} />
      ))}
    </Blog>
  );
}
