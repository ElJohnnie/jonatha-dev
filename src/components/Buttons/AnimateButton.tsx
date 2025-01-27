import Link from 'next/link';
import { AnimateButtonProps } from './types';

export default function AnimateButton({
  route,
  title,
  icon,
}: Readonly<AnimateButtonProps>) {
  return (
    <Link
      href={route}
      className='align-center text-white-100 hover:text-white-500 group relative inline-flex items-center justify-center overflow-hidden rounded rounded-md border border-transparent bg-transparent px-12 py-3 text-sm font-bold focus:outline-none focus:ring active:bg-slate-600 active:text-white'
    >
      <span className='ease border-white-500 absolute left-0 top-0 h-0 w-0 rounded-md border-t-2 transition-all duration-200 group-hover:w-full'></span>
      <span className='ease border-white-500 absolute right-0 top-0 h-0 w-0 rounded-md border-r-2 transition-all duration-200 group-hover:h-full'></span>
      <span className='ease border-white-500 absolute bottom-0 right-0 h-0 w-0 rounded-md border-b-2 transition-all duration-200 group-hover:w-full'></span>
      <span className='ease border-white-500 absolute bottom-0 left-0 h-0 w-0 rounded-md border-l-2 transition-all duration-200 group-hover:h-full'></span>
      <span className='flex items-center justify-center align-middle'>
        {title}
        {icon && <span className='ml-2'>{icon}</span>}
      </span>
    </Link>
  );
}
