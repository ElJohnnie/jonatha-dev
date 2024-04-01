'use client';
import React, { useState, useEffect } from 'react';
import ArticleElement from '@/components/Sections/Blog/ArticleElement';
import { Blog, EmptyBlog } from '@/components/Sections';
import { getAllPosts } from '@/services/notion';
import { useTranslations } from 'next-intl';
import LoadingComponent from '@/components/Loading/Loading';

interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  avatar: string;
  tags: string;
}

export default function BlogPage() {
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
  
  if(!postLength) return <EmptyBlog text={t('empty')} />

  return (
    <Blog>
      {posts.map((post) => (
        <ArticleElement key={post.id} post={post} />
      ))}
    </Blog>
  ) 
}
