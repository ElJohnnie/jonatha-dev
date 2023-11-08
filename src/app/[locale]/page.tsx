'use client';

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className='py-nav-height-desktop selection:bg-green flex h-screen justify-center overflow-hidden bg-slate-950 px-10 selection:text-black lg:w-full'>
      <div className='bg-background text-secondary mt-10 p-5 text-base'>
        <h1 className='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl font-bold text-white'>
          {t('title')}
        </h1>
        <h2 className='text-primary mb-0 mt-5 px-3 text-xl font-semibold lg:text-2xl'>
          {t('title')}
        </h2>
      </div>
    </main>
  );
}
