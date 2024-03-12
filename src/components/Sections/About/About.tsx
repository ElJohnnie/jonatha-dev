import { AboutProps } from './types';
import Image from 'next/image';

const About: React.FC<AboutProps> = ({
  title,
  description,
  postDescription,
  features,
  image,
}) => {
  return (
    <section className='mt-4 h-auto pt-4'>
      <div className='mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:py-16'>
        <div className='mr-auto md:col-span-7'>
          {image && (
            <div className='top-[12vh] hidden h-auto place-self-start md:fixed lg:mt-0 lg:flex'>
              <Image
                className='filter-grayscale'
                src={'/images/jonatha.png'}
                alt='profile'
                width={550}
                height={550}
              />
            </div>
          )}
        </div>
        <div className='mr-auto place-self-center md:col-span-5 lg:max-w-lg'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            {title}
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white'>
            {description}
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            {postDescription}
          </p>
          <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none'>
            {features.map((feature) => (
              <div key={feature.name} className='relative pl-9'>
                <dt className='inline font-semibold text-white'>
                  <feature.icon
                    className='absolute left-1 top-1 h-5 w-5 text-indigo-600'
                    aria-hidden='true'
                  />
                  {feature.name}
                </dt>{' '}
                <dd className='inline'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
