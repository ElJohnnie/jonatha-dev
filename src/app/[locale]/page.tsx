'use client';
import { useTranslations } from 'next-intl';
import { Hero } from '@/components/Sections';

interface HomeProps {
  params: {
    lang: string;
  };
}

export default function Home({ params }: Readonly<HomeProps>) {
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
