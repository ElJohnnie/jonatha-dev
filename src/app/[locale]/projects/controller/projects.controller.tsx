import ProjectElement from '@/app/[locale]/projects/components/projects-element.component';
import { useTranslations } from 'next-intl';
import EmptyProject from '../components/empty-projects.component';
import { ProjectsControllerProps } from '../types';
import ProjectsView from '../view/projects.view';

export default function ProjectsController({
  projects,
  images = [],
}: ProjectsControllerProps) {
  const t = useTranslations('Projects');

  return projects?.length ? (
    <ProjectsView>
      {projects.map((project, index) => (
        <ProjectElement
          key={project.id}
          project={project}
          image={images[index]}
        />
      ))}
    </ProjectsView>
  ) : (
    <EmptyProject text={t('empty')} />
  );
}
