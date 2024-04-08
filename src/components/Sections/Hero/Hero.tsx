import Image from 'next/image';
import AnimateButton from '../../Buttons/AnimateButton';
import { HeroProps } from './types';

export default function Hero({
  title,
  description,
  solutions,
  linkButton,
  image,
}: Readonly<HeroProps>) {
  return (
    <section className='flex h-auto h-full flex-col items-center justify-center'>
      {image && (
        <div>
          <Image
            className='filter-grayscale'
            src={'/images/jonatha.png'}
            alt='profile'
            width={200}
            height={200}
          />
        </div>
      )}
      <div className='text-center'>
        <h1 className='mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight md:text-6xl dark:text-white'>
          <span className='leading-12 block w-full bg-gradient-to-r from-indigo-700 to-fuchsia-500 bg-clip-text py-2 text-transparent lg:inline'>
            {title}
          </span>
        </h1>
        {description && (
          <div className=' mb-4'>
            <h1 className='text-1xl bg-gradient-to-r from-slate-100 to-slate-200 to-50% bg-clip-text font-extrabold tracking-tight text-transparent [text-wrap:balance] md:text-4xl'>
              {description}
            </h1>
            <span className='inline-flex h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] flex-col overflow-hidden text-2xl font-extrabold text-indigo-500 md:ml-1 md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:text-4xl'>
              <ul
                className={`block animate-text-slide-4 leading-tight [&_li]:block`}
              >
                {solutions &&
                  solutions.map((solution) => (
                    <li key={solution}>{solution}</li>
                  ))}
                <li aria-hidden='true'>{solutions && solutions[0]}</li>
              </ul>
            </span>
          </div>
        )}
      </div>
      <div className='mt-4'>
        <AnimateButton title={linkButton ?? ''} route='/about' />
      </div>
    </section>
  );
}
