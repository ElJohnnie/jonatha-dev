import { BlogViewProp } from '../types';

export default function BlogView({ children }: Readonly<BlogViewProp>) {
  return (
    <section className='h-100 mt-2 pt-2'>
      <div className='mx-auto max-w-7xl justify-center px-4 md:py-12'>
        <div className='mx-auto lg:mx-0'>
          <h1 className='mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight md:text-6xl dark:text-white'>
            <span className='leading-12 block w-full bg-clip-text py-2 text-slate-600 lg:inline'>
              Blog
            </span>
          </h1>
        </div>
        <div className='mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-6 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {children}
        </div>
      </div>
    </section>
  );
}
