'use client';

import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero/Hero';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className='flex flex-col items-center justify-center'>
      <Hero title={t('title')} description={t('description')}></Hero>
    </main>
  );
}
