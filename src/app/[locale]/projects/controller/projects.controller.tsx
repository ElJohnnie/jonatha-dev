import React, { useState, useEffect } from 'react';
import ArticleElement from '@/app/[locale]/projects/components/projects-element.component';
import ProjectsView from '../view/projects.view';
import EmptyBlog from '../components/empty-projects.component';
import { ProjectsControllerProps } from '../types';
import { useTranslations } from 'next-intl';

export default function ProjectsController({
  projects,
}: ProjectsControllerProps) {
  const t = useTranslations('Projects');

  return projects ? (
    <ProjectsView>
      {projects.map((project) => (
        <ArticleElement key={project.id} project={project} />
      ))}
    </ProjectsView>
  ) : (
    <EmptyBlog text={t('empty')} />
  );
}
