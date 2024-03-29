import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { useTranslations } from 'next-intl';

export default function AlertComponent({ error }:Readonly<{ error: string }>) {
    const t = useTranslations(error);
    
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <div className='max-w-md rounded-lg bg-white p-8'>
          <div className='flex items-center justify-center'>
            <ExclamationCircleIcon className='h-8 w-8 text-indigo-600' />
            <h2 className='ml-2 text-xl font-bold text-indigo-600'>{t('error')}</h2>
          </div>
          <p className='mt-4 text-gray-700'>{t('hasError')}</p>
        </div>
      </div>
    );
  }