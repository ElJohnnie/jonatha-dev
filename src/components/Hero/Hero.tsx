/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import Link from 'next/link';
interface HeroProps {
  title: string;
  description?: string;
  linkButton?: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, linkButton }) => {
  return (
    <section className='h-100 pt-24'>
      <div className='mx-auto grid max-w-screen-xl justify-center px-4 py-8 lg:grid-cols-12 lg:py-16'>
        <div className='mr-auto place-self-center md:col-span-7'>
          <h1 className='mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl'>
            <span className='leading-12 block w-full bg-gradient-to-r from-indigo-700 to-fuchsia-500 bg-clip-text py-2 text-transparent lg:inline'>
              {title}
            </span>
          </h1>
          <p className='text-white-600 mb-8 px-0 text-lg md:text-xl lg:px-24'>
            {description}
          </p>
          {linkButton && (
            <Link
              href='#'
              className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4'
            >
              {linkButton}
              <svg
                className='-mr-1 ml-2 h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </Link>
          )}
        </div>
        <div className='hidden lg:col-span-5 lg:mt-0 lg:flex'>
          <Image
            className='filter-grayscale'
            src={'/images/jonatha.jpg'}
            alt=''
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
