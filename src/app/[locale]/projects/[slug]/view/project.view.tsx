'use client';

import ImageCarousel from '@/components/carousel/carousel.component';
import Markdown from 'react-markdown';
import { ProjectProps } from '../../types';

export default function ProjectView({ content, images }: Readonly<ProjectProps>) {
  return (
    <section className='mt-4 h-auto pt-4'>
      <div className='mx-auto max-w-screen-sm justify-center md:max-w-screen-2xl md:py-12'>
        <div className='flex justify-center'>
          <div className='prose max-w-none mb-8 md:w-3/4'>
            <Markdown>{content}</Markdown>
          </div>
        </div>
        
        <div className='flex justify-center'>
          <div className='max-w-none mb-8 md:w-3/4'>
            <ImageCarousel images={images} />
          </div>
        </div>
      </div>
    </section>
  );
}