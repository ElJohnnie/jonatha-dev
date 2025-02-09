import { ProjectElementComponent } from '../types';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export default function ProjectElement({
  project,
}: Readonly<ProjectElementComponent>) {
  const locale = useLocale();
  return (
    <>
      <article
        className='group relative h-64 w-full overflow-hidden rounded-lg bg-cover bg-center shadow-lg transition  duration-300 ease-in-out hover:shadow-2xl'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')",
        }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out group-hover:opacity-75'></div>
        <div className='relative flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4'>
          <h3 className='text-center'>
            <Link
              className='text-center text-2xl font-bold text-white'
              href={`/${locale}/projects/${project.slug}`}
            >
              <span className='absolute inset-0'></span>
              {project.title}
            </Link>
          </h3>
        </div>
      </article>
    </>
  );
}
