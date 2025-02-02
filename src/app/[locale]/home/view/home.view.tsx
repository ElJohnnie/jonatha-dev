import Image from 'next/image';
import AnimateButton from '../../../../components/buttons/animated-button.component';
import { HomeViewProps } from '../types';
import DecryptedText from '@/components/texts/decrypted-text.component';

export default function HomeView({
  title,
  description,
  linkButton,
  image,
}: Readonly<HomeViewProps>) {
  return (
    <section className='flex h-full flex-col items-center justify-center'>
      {image && (
        <div>
          <Image
            src={'/images/jonatha.png'}
            alt='profile'
            width={200}
            height={200}
          />
        </div>
      )}
      <div className='text-center'>
        <h1 className='mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight md:text-6xl dark:text-white'>
          <span className='leading-12 block w-full lg:inline'>
            <DecryptedText
              text={title}
              speed={100}
              maxIterations={20}
              characters='ABCD1234!?'
              parentClassName='all-letters'
              encryptedClassName='encrypted'
            />
          </span>
        </h1>
        {description && (
          <div className=' mb-4'>
            <h1 className='text-1xl bg-gradient-to-r from-slate-600 to-slate-700 to-50% bg-clip-text font-extrabold tracking-tight text-transparent [text-wrap:balance] md:text-4xl'>
              {description}
            </h1>
          </div>
        )}
      </div>
      <div className='mt-4'>
        <AnimateButton title={linkButton ?? ''} route='/about' />
      </div>
    </section>
  );
}
