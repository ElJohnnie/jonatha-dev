'use client';
import React, { useState, useEffect } from 'react';
import ArticleElement from '@/app/[locale]/blog/components/article-element.component';
import BlogView from '../view/blog.view';
import { getAllPosts } from '@/services/notion';
import { useTranslations } from 'next-intl';
import LoadingComponent from '@/components/loading/loading.component';
import EmptyBlog from '../components/empty-blog.component';
import { Post } from '../types';

export default function BlogController() {
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
    <BlogView>
      {posts.map((post) => (
        <ArticleElement key={post.id} post={post} />
      ))}
    </BlogView>
  ) : (
    <EmptyBlog text={t('empty')} />
  );
}
