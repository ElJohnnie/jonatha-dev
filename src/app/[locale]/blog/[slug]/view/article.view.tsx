import Markdown from 'react-markdown';
import { ArticleProps } from '../../types';
import ArticleElement from '../../components/article-element.component';
import { useTranslations } from 'next-intl';

function AsidePosts({ tagPosts }: Readonly<Pick<ArticleProps, 'tagPosts'>>) {
  return (
    <div>
      {tagPosts.map((post) => (
        <ArticleElement key={post.id} post={post} />
      ))}
    </div>
  );
}

export default function ArticleView({
  content,
  tagPosts,
}: Readonly<ArticleProps>) {
  const t = useTranslations('Blog');

  return (
    <>
      <section className='mt-4 h-auto pt-4'>
        <div className='mx-auto max-w-screen-sm justify-center md:max-w-screen-2xl md:py-12'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
            <div className='md:col-span-3'>
              <div className='mx-2 max-w-full md:mx-auto md:max-w-screen-lg'>
                <Markdown>{content}</Markdown>
              </div>
            </div>
            <div className='md:col-span-1'>
              <div className='mx-2 max-w-full md:mx-auto md:max-w-screen-md'>
                <h3 className='mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight md:text-4xl dark:text-white'>
                  <span className='leading-12 block w-full bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent lg:inline'>
                    {t('relational')}{' '}
                  </span>
                </h3>
                <AsidePosts tagPosts={tagPosts} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
