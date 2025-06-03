import ProjectView from '@/app/[locale]/projects/[slug]/view/project.view';
import { ProjectProps } from '../../types';

export default function ProjectController({
  content,
  images,
}: Readonly<ProjectProps>) {
  return <ProjectView images={images} content={content} />;
}
