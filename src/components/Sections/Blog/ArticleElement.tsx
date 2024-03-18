import { ArticleComponent } from './types';
import Link from 'next/link';
import Image from 'next/image';

export default function ArticleElement({ post }: Readonly<ArticleComponent>) {
  return (
    <article
      key={post.id}
      className='flex max-w-xl flex-col items-start justify-between'
    >
      <div className='flex items-center gap-x-4 text-xs'>
        <time dateTime={post.date} className='text-gray-500'>
          {post.date}
        </time>
        <p className='relative z-10 rounded-full bg-indigo-500 px-3 py-1.5 font-medium text-slate-50 hover:bg-indigo-600'>
          {post.tags}
        </p>
      </div>
      <div className='group relative'>
        <h3 className='mt-3 text-lg font-semibold leading-6 text-slate-50 group-hover:text-indigo-500'>
          <Link
            href={`/blog/${post.slug}?tag=${post.tags}&author=${post.author}`}
          >
            {post.title}
          </Link>
        </h3>
        <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-500'>
          {post.description}
        </p>
      </div>
      <div className='relative mt-2 flex items-center gap-x-4'>
        <Image
          src={post.avatar}
          alt=''
          className='h-10 w-10 rounded-full bg-gray-50'
          width={50}
          height={50}
        />
        <div className='text-sm leading-6'>
          <p className='font-semibold text-slate-50'>
            <span className='absolute inset-0' />
            {post.author}
          </p>
          <p className='text-gray-600'>{post.author}</p>
        </div>
      </div>
    </article>
  );
}
