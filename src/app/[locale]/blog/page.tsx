'use client'
import React, { useState, useEffect } from 'react';
import ArticleElement from '@/components/Sections/Blog/ArticleElement';
import { Blog, EmptyBlog } from '@/components/Sections';
import { getAllPosts } from '@/services/notion';
import { useTranslations } from 'next-intl';
import LoadingComponent from '@/components/Loading/LoadingComponent';

interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  avatar: string;
  tags: string;
}

interface BlogPageProps {
  params: {
    lang: string;
  };
}

export default function BlogPage({ params }: Readonly<BlogPageProps>) {
  const t = useTranslations('Blog');

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      getAllPosts()
        .then((res) => {
          setPosts(res);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  const postLength = !!posts.length;

  if (loading) return <LoadingComponent />;

  return postLength ? (
    <Blog>
      {posts.map((post) => (
        <ArticleElement key={post.id} post={post} />
      ))}
    </Blog>
  ) : (
    <EmptyBlog text={t('empty')} />
  );
}
