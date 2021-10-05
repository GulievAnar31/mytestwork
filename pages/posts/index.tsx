import React from 'react';
import Posts from '../../components/Posts';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MainLayout from '../../layouts/MainLayout';

export default function index() {
  const { posts } = useTypedSelector((state) => state.posts);

  const { fetchPosts } = useActions();

  React.useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  }, []);

  return (
    <MainLayout>
      <div>
        <Posts posts={posts} />
      </div>
    </MainLayout>
  );
}
