'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Error({
  error,
  reset,
}: {
  error?: Error;
  reset?: () => void;
}) {
  const t = useTranslations('BlogError');
  const locale = useLocale();

  return (
    <section className='flex h-full flex-col items-center justify-center'>
      <h1 className='mb-4 text-3xl font-bold text-red-600'>{t('error')}</h1>
      <p className='mb-6 text-lg'>{t('description')}</p>
      <div className='flex gap-4'>
        <Link
          href={`/${process.env.NEXT_PUBLIC_DEFAULT_LOCALE || locale}/blog`}
          className='rounded bg-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-400'
        >
          {t('button')}
        </Link>
      </div>
    </section>
  );
}
