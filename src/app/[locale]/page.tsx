'use client';

import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero/Hero';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main>
      <Hero title={t('title')} linkButton={t('linkButton')}></Hero>
    </main>
  );
}
