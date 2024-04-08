import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function EmptyBlog({ text }: Readonly<{ text: string }>) {
  return (
    <section className='flex h-auto h-full flex-col items-center justify-center'>
        <div className='mx-auto flex text-center lg:max-w-none'>
          <h1 className='mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-6xl dark:text-white'>
            {text}
          </h1>
          <MagnifyingGlassIcon className='max-w-[100px]' />
        </div>
    </section>
  );
}
