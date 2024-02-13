/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import AnimateButton from '../Buttons/AnimateButton';

interface HeroProps {
  title: string;
  description?: string;
  solutions?: string[];
  linkButton?: string;
  image?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  solutions,
  linkButton,
  image,
}) => {
  return (
    <section className='h-100 mt-12 pt-24'>
      <div className='mx-auto grid max-w-screen-xl justify-center px-4 py-8 lg:grid-cols-12 lg:py-16'>
        <div className='mr-auto place-self-center md:col-span-12'>
          <h1 className='mb-4 max-w-2xl text-6xl font-extrabold leading-none tracking-tight dark:text-white'>
            <span className='leading-12 block w-full bg-gradient-to-r from-indigo-700 to-fuchsia-500 bg-clip-text py-2 text-transparent lg:inline'>
              {title}
            </span>
          </h1>
          {/* <!-- Sliding Text animation --> */}
          {description && (
            <div className='md:text4xl bg-gradient-to-r from-slate-200/60 to-slate-200 to-50% bg-clip-text text-4xl font-extrabold text-transparent [text-wrap:balance]'>
              {description}{' '}
              <span className='inline-flex h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] flex-col overflow-hidden text-indigo-500 md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))]'>
                <ul
                  className={`block animate-text-slide-4 text-left leading-tight [&_li]:block`}
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
          {/* <!-- End: Sliding Text animation --> */}
          <div className='mt-6'></div>
          {linkButton && (
            <AnimateButton
              title={linkButton}
              route={'/about'}
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
                  />
                </svg>
              }
            />
          )}
        </div>
        {image && (
          <div className='hidden lg:col-span-3 lg:mt-0 lg:flex'>
            <Image
              className='filter-grayscale'
              src={'/images/jonatha.jpg'}
              alt=''
              width={400}
              height={400}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
