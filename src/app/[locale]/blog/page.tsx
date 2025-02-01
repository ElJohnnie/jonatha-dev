import BlogController from './controller/blog.controller';

export default async function Page() {
  const posts = await import('@/services/notion.blog').then((serverSide) =>
    serverSide.getAllPosts()
  );

  return <BlogController posts={posts} />;
}
