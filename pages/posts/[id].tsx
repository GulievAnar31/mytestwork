import { Button } from '@mui/material';
import { Router, useRouter } from 'next/dist/client/router';
import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MainLayout from '../../layouts/MainLayout';

const PostPage = () => {
  const router = useRouter();
  const { posts } = useTypedSelector((state) => state.posts);

  let elem;

  if (process.browser) {
    elem = window.location.href.split('/').pop();
  }

  let post = posts[Object.keys(posts)[elem - 1]];

  return (
    <MainLayout>
      <Button
        style={{ fontSize: 32 }}
        onClick={() => router.push('/posts')}
        variant="outlined"
        color="error">
        Назад
      </Button>
      <div key={post.id}>
        <h1>{post.title}</h1>
        <span>{post.body}</span>
        <hr />
        {post.comments ? (
          post.comments.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.id}</p>
                <span>{item.body}</span>
              </div>
            );
          })
        ) : (
          <span>Комментариев нету</span>
        )}
      </div>
    </MainLayout>
  );
};

export default PostPage;
