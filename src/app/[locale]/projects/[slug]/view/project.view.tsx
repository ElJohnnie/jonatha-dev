'use client';

import ImageCarousel from '@/components/carousel/carousel.component';
import Markdown from 'react-markdown';
import { ProjectProps } from '../../types';

export default function ProjectView({
  content,
  images,
}: Readonly<ProjectProps>) {
  return (
    <section className='mt-4 h-auto pt-4'>
      <div className='mx-auto max-w-screen-sm justify-center md:max-w-screen-2xl'>
        <div className='flex justify-center'>
          <div className='prose mb-8 w-3/4 max-w-none'>
            <Markdown>{content}</Markdown>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='mb-8 w-3/4 max-w-full'>
            <ImageCarousel images={images} />
          </div>
        </div>
      </div>
    </section>
  );
}
