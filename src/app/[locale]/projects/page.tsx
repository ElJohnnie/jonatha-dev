'use client';

import { useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('Projects');
  return (
    <main className='py-nav-height-desktop selection:bg-green flex h-screen justify-center overflow-hidden bg-slate-950 px-10 selection:text-black lg:w-full'>
      <>{t('title')}</>
    </main>
  );
}
