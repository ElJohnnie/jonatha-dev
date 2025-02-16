import React from 'react';
import ProjectElement from '@/app/[locale]/projects/components/projects-element.component';
import ProjectsView from '../view/projects.view';
import EmptyProject from '../components/empty-projects.component';
import { ProjectsControllerProps } from '../types';
import { useTranslations } from 'next-intl';

export default function ProjectsController({
  projects,
  images = [],
}: ProjectsControllerProps) {
  const t = useTranslations('Projects');

  console.log(projects);

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
