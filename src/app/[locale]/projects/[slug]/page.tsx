import { getProject } from '@/services/notion-projects.service';
import {
  getAllImageUrls,
  getFirstImageUrl,
  removeImagesFromMarkdown,
} from '@/utils/get-image-url.util';
import { Metadata } from 'next';
import ProjectController from './controller/project.controller';

interface PageProps {
  params: { slug: string; locale: string };
  searchParams?: { tag?: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, locale } = params;
  const projectResult = await getProject(slug, locale);

  if (!projectResult) {
    return {
      title: 'Post não encontrado',
      description: 'O post que você está procurando não foi encontrado.',
    };
  }

  const { project, content } = projectResult;
  const image = getFirstImageUrl(content);

  return {
    title: project.title,
    description: project.description || 'Descrição não disponível',
    openGraph: {
      title: project.title,
      description: project.description || 'Descrição não disponível',
      url: `/${locale}/blog/${project.slug}`,
      type: 'article',
      publishedTime: project.date,
      authors: [project.author],
      images: [
        {
          url: image ?? '__blank',
          alt: project.title,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description || 'Descrição não disponível',
      images: [image ?? '__blank'],
    },
  };
}

export default async function Page({ params }: Readonly<PageProps>) {
  const { slug, locale } = params;

  const project = await getProject(slug, locale);

  const content = removeImagesFromMarkdown(project.content);

  const images = getAllImageUrls(project.content);

  return <ProjectController images={images} content={content} />;
}
