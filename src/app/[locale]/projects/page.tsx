import { useLocale } from 'next-intl';
import ProjectsController from './controller/projects.controller';
import { getFirstImageUrl } from '@/utils/get-image-url.util';
import { getAllProjects, getProject } from '@/services/notion-projects.service';

export default async function Page() {
  const locale = useLocale();

  const projects = await getAllProjects();
  const filteredProjects = projects.filter(
    (project) => project.lang === locale
  );

  const firstImages = await Promise.all(
    filteredProjects.map(async (project) => {
      const currentProject = await getProject(project.slug, locale);
      return getFirstImageUrl(currentProject.content);
    })
  );

  const validImages = firstImages.filter((img): img is string => Boolean(img));

  return (
    <ProjectsController projects={filteredProjects} images={validImages} />
  );
}
