import { About } from '@/components/Sections';
import { useTranslations } from 'next-intl';
import {
  CodeBracketSquareIcon,
  AcademicCapIcon,
} from '@heroicons/react/20/solid';

export default function AboutPage() {
  const t = useTranslations('About');
  const features = [
    {
      name: 'Universidade de Santa Cruz do sul:',
      description: t('experience-1'),
      icon: AcademicCapIcon,
    },
    {
      name: 'Front-end Vivo (Telefônica) B2C:',
      description: t('experience-2'),
      icon: CodeBracketSquareIcon,
    },
    {
      name: 'Front-end Vivo (Telefônica) B2B:',
      description: t('experience-3'),
      icon: CodeBracketSquareIcon,
    },
  ];
  return (
    <About
      title={t('title')}
      description={t('description')}
      postDescription={t('post-description')}
      features={features}
      image={true}
    ></About>
  );
}
