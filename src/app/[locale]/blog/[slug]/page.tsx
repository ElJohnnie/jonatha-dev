import { Metadata } from "next";
import ArticleController from "./controller/article.controller";
import { getPost, getPostsByTag } from "@/services/notion.blog";

interface PageProps {
  params: { slug: string };
  searchParams: { tag: string };
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post não encontrado",
      description: "O post que você está procurando não existe.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${params.slug}`,
      type: "article",
      images: [
        {
          url: "/images/jonatha.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/images/jonatha.png"],
    },
  };
}

export default async function Page({ params, searchParams }: Readonly<PageProps>) {
  const slug = params.slug;
  const tag = searchParams.tag;

  const [content, tagPosts] = await Promise.all([
    getPost(slug),
    getPostsByTag(tag, slug),
  ]);

  return <ArticleController content={content} tagPosts={tagPosts} />;
}
