'use client';

import Link from 'next/link';
import { linkStyleString } from './styles';

interface Props {
  route: string;
  title: string;
  icon?: JSX.Element;
}

export default function AnimateButton({ route, title, icon }: Readonly<Props>) {
  return (
    <Link href={route ?? '#'} className={linkStyleString}>
      <span className='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-indigo-500 transition-all duration-200 group-hover:w-full'></span>
      <span className='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-indigo-500 transition-all duration-200 group-hover:h-full'></span>
      <span className='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-indigo-500 transition-all duration-200 group-hover:w-full'></span>
      <span className='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-indigo-500 transition-all duration-200 group-hover:h-full'></span>
      <span className='flex items-center justify-center align-middle'>
        {title}
        {icon && <span className='ml-2'>{icon}</span>}
      </span>
    </Link>
  );
}
