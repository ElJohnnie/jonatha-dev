/* eslint-disable react/no-unescaped-entities */
'use client';
interface HeroProps {
  title: string;
  description?: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <section className='h-100 pt-24'>
      <div className='mx-auto text-left md:w-11/12 md:text-center'>
        <h1 className='text-white-900 mb-8 text-4xl font-extrabold leading-none tracking-normal md:text-6xl md:tracking-tight'>
          <span className='leading-12 block w-full bg-gradient-to-r from-indigo-700 to-fuchsia-500 bg-clip-text py-2 text-transparent lg:inline'>
            {title}
          </span>
        </h1>

        <p className='text-white-600 mb-8 px-0 text-lg md:text-xl lg:px-24'>
          {description}
        </p>
      </div>
    </section>
  );
};

export default Hero;
