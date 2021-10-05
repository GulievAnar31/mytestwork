import { Router, useRouter } from 'next/dist/client/router';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { IPosts } from '../../types/posts';

const PostPage = () => {
  const router = useRouter();

  const post: IPosts = {
    id: 1,
    title: 'One',
    body: 'Anar',
    comments: [],
  };
  return (
    <MainLayout>
      <button style={{ fontSize: 32 }} onClick={() => router.push('/posts')}>
        Назад
      </button>
      <div style={{ margin: '20px 0' }} key={post.id}>
        <h1>{post.title}</h1>
        <span>{post.body}</span>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h1>Комментарии</h1>
        {post.comments.map((comment) => {
          return (
            <div>
              <div>Автор:{comment.id}</div>
              <div>Автор:{comment.id}</div>
              <div>{comment.body}</div>
            </div>
          );
        })}
        <input type="text" />
        <input type="submit" />
      </div>
    </MainLayout>
  );
};

export default PostPage;
