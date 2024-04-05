'use client';
import { useTranslations } from 'next-intl';

interface ProjectsProps {
  params: {
    lang: string;
  };
}

export default function Projects({ params }: Readonly<ProjectsProps>) {
  const t = useTranslations('Projects');
  return (
    <main className='selection:bg-green flex justify-center overflow-hidden px-10 py-nav-height-desktop selection:text-black lg:w-full'>
      {t('title')}
    </main>
  );
}
