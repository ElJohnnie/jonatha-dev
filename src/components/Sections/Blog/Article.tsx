import Markdown from 'react-markdown';

const Article: React.FC = ({ content }: any) => {
  return (
    <section className='mt-4 h-auto pt-4'>
      <Markdown>{content}</Markdown>
    </section>
  );
};

export default Article;
