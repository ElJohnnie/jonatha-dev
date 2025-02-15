export default function EmptyBlog({ text }: Readonly<{ text: string }>) {
  return (
    <section className='flex h-full flex-col items-center justify-center'>
      <div className='mx-auto flex text-center lg:max-w-none'>
        <h1 className='mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-6xl dark:text-white'>
          {text}
        </h1>
      </div>
    </section>
  );
}
