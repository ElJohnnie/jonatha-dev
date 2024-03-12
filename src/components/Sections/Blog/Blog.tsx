import { BlogProp } from './types';

export default function Blog({ children }: Readonly<BlogProp>) {
  return (
    <section className='h-100 mt-8 pt-8'>
      <div className='mx-auto max-w-7xl justify-center px-4 md:py-12'>
        <div className='mx-auto lg:mx-0'>
          <h1 className='mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight md:text-6xl dark:text-white'>
            <span className='leading-12 block w-full bg-gradient-to-r from-indigo-700 to-fuchsia-500 bg-clip-text py-2 text-transparent lg:inline'>
              Blog
            </span>
          </h1>
          <h2 className='text-1xl bg-gradient-to-r from-slate-100 to-slate-200 to-50% bg-clip-text font-extrabold tracking-tight text-transparent [text-wrap:balance] md:text-4xl'>
            Texto de teste
          </h2>
        </div>
        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {children}
        </div>
      </div>
    </section>
  );
}
