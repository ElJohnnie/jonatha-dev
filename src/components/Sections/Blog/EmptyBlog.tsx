import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function EmptyBlog({ text }: Readonly<{ text: string }>) {
  return (
    <section className='h-100 mt-8 pt-8'>
      <div className='mx-auto max-w-7xl justify-center px-4 md:py-12'>
        <div className='mx-auto flex items-center justify-center text-center sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none'>
          <h1 className='mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-6xl dark:text-white'>
            {text}
          </h1>
          <MagnifyingGlassIcon className='max-w-[100px]' />
        </div>
      </div>
    </section>
  );
}
