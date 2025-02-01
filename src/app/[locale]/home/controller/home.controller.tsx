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

  return (
    <HomeView
      title={t('title')}
      description={t('description')}
      linkButton={t('linkButton')}
      image={true}
    ></HomeView>
  );
}
