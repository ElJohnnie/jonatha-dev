import Markdown from 'react-markdown';

const Article: React.FC = ({ content }: any) => {
  return (
    <section className='h-100 mt-2 pt-2'>
      <div className='mx-auto max-w-4xl justify-center px-4 md:py-12'>
        <div className='mx-auto lg:mx-0'>
          <h3 className='mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight md:text-4xl dark:text-white'>
            <span className='leading-12 block w-full bg-gradient-to-r from-indigo-700 to-fuchsia-500 bg-clip-text text-transparent lg:inline'>
              Blog
            </span>
          </h3>
        </div>
        <div className='mr-auto place-self-center md:col-span-12'>
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </section>
  );
};

export default Article;
