import ProjectView from '@/app/[locale]/projects/[slug]/view/project.view';
import { ProjectProps } from '../../types';

export default function ProjectController({ content }: Readonly<ProjectProps>) {
  return <ProjectView content={content} />;
}
