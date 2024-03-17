'use client';
import { useTranslations } from 'next-intl';
import { Hero } from '@/components/Sections';

export default function Home() {
  const t = useTranslations('Home');

  const solutions = [
    t('architecture'),
    t('back-end'),
    t('front-end'),
    t('ecosystem'),
  ];

  return (
    <Hero
      title={t('title')}
      description={t('description')}
      solutions={solutions}
      linkButton={t('linkButton')}
    ></Hero>
  );
}
