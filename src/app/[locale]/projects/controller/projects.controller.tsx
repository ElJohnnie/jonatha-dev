import React, { useState, useEffect } from 'react';
import ArticleElement from '@/app/[locale]/projects/components/projects-element.component';
import ProjectsView from '../view/projects.view';
import { getAllPosts } from '@/services/notion';
import { useTranslations } from 'next-intl';
import LoadingComponent from '@/components/loading/loading.component';
import EmptyBlog from '../components/empty-blog.component';
import { Projects } from '../types';

export default function ProjectsController() {
  const t = useTranslations('Blog');

  const [projects, setProjects] = useState<Projects[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      getAllPosts()
        .then((res) => {
          setProjects(res);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  const postLength = !!projects.length;

  if (loading) return <LoadingComponent />;

  return postLength ? (
    <ProjectsView>
      {projects.map((project) => (
        <ArticleElement key={project.id} post={project} />
      ))}
    </ProjectsView>
  ) : (
    <EmptyBlog text={t('empty')} />
  );
}
