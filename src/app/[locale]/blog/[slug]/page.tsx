import Article from '@/components/Sections/Blog/Article';

import { getPost, getPostsByTag } from '@/services/notion';

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) {
  const contentPost = getPost(params.slug);
  const postsByTag = getPostsByTag(searchParams.tag, params.slug);
  const [content, tagPosts] = await Promise.all([contentPost, postsByTag]);
  console.log(tagPosts);

  return <Article {...content} />;
}
