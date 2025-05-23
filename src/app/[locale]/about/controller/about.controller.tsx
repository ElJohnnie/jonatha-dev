'use client';
import {
  AcademicCapIcon,
  CodeBracketSquareIcon,
} from '@heroicons/react/20/solid';
import { useTranslations } from 'next-intl';
import AboutView from '../view/about.view';

interface AboutProps {
  params: {
    lang: string;
  };
}

export default function AboutController({ params }: Readonly<AboutProps>) {
  const t = useTranslations('About');

  const features = [
    {
      name: 'Universidade do Vale do Rio dos Sinos:',
      description: t('experience-0'),
      icon: AcademicCapIcon,
    },
    {
      name: 'Universidade de Santa Cruz do sul:',
      description: t('experience-1'),
      icon: AcademicCapIcon,
    },
    {
      name: 'Villela Brasil Bank:',
      description: t('experience-6'),
      icon: CodeBracketSquareIcon,
    },
    {
      name: 'Software Devloper Full Stack, Vivo (Telefônica) B2C:',
      description: t('experience-2'),
      icon: CodeBracketSquareIcon,
    },
    {
      name: 'Software Devloper Full Stack, Vivo (Telefônica) B2B:',
      description: t('experience-3'),
      icon: CodeBracketSquareIcon,
    },
    {
      name: 'UNISC scholarship program intern - ReactJS front-end:',
      description: t('experience-4'),
      icon: CodeBracketSquareIcon,
    },
    {
      name: 'Independent developer:',
      description: t('experience-5'),
      icon: CodeBracketSquareIcon,
    },
  ];
  return (
    <AboutView
      title={t('title')}
      description={t('description')}
      postDescription={t('post-description')}
      features={features}
      image={true}
    ></AboutView>
  );
}
