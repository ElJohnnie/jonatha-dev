'use client';

import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero/Hero';
import Socials from '@/components/Navigation/Socials';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className='flex flex-col items-center justify-center overflow-hidden px-10 py-nav-height-desktop selection:text-black lg:w-full'>
      <Hero title={t('title')} description={t('description')}></Hero>
      <Socials></Socials>
    </main>
  );
}
