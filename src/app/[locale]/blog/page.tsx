import ArticleElement from '@/components/Sections/Blog/ArticleElement';
import { postsMock } from '@/mock';
import { Blog } from '@/components/Sections';

export default function BlogPage() {
  return (
    <Blog>
      {postsMock.map((post) => (
        <ArticleElement key={post.id} post={post} />
      ))}
    </Blog>
  );
}
