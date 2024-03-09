'use client';

import { About } from '@/components/Sections';
import { useTranslations } from 'next-intl';

export default function Item() {
  const t = useTranslations('About');
  return <About></About>;
}
