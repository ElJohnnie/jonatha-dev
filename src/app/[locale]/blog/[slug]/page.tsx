import Article from '@/components/Sections/Blog/Article';

import { getPost } from '@/services/notion';

export default async function BlogPage({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const content = await getPost(params.slug);
  return <Article {...content} />;
}
