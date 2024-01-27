'use client';

import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero/Hero';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className='mx-auto flex flex-auto items-center overflow-hidden px-0 py-nav-height-desktop selection:bg-green selection:text-black lg:max-w-3xl'>
      <Hero title={t('title')}></Hero>
    </main>
  );
}
