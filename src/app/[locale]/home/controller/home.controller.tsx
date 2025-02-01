'use client';
import { useTranslations } from 'next-intl';
import HomeView from '../view/home.view';

interface HomeProps {
  params: {
    lang: string;
  };
}

export default function HomeController({ params }: Readonly<HomeProps>) {
  const t = useTranslations('Home');

  // const solutions = [
  //   t('architecture'),
  //   t('back-end'),
  //   t('front-end'),
  //   t('ecosystem'),
  // ];

  return (
    <HomeView
      title={t('title')}
      description={t('description')}
      // solutions={solutions}
      linkButton={t('linkButton')}
      image={true}
    ></HomeView>
  );
}
