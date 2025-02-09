import { useLocale } from 'next-intl';
import ProjectsController from './controller/projects.controller';

export default async function Page() {
  const locale = useLocale();

  return <ProjectsController projects={undefined} />;
}
