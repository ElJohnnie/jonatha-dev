'use client';
import React, { useState, useEffect } from 'react';
import ArticleElement from '@/components/Sections/Blog/ArticleElement';
import { Blog, EmptyBlog } from '@/components/Sections';
import { getAllPosts } from '@/services/notion';
import { useTranslations } from 'next-intl';

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

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await getAllPosts();
      setPosts(fetchedPosts);
    };

    fetchData();
  }, []);

  const postLength = !!posts.length;

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
