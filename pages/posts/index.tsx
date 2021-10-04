import React from 'react';
import Posts from '../../components/Posts';
import MainLayout from '../../layouts/MainLayout';
import { IPosts } from '../../types/posts';

export default function index() {
  const posts: IPosts[] = [
    {
      id: 1,
      titlle: 'One',
      body: 'Anar',
      comments: [],
    },
    {
      id: 2,
      titlle: 'Two',
      body: 'Anar',
      comments: [],
    },
    {
      id: 3,
      titlle: 'Three',
      body: 'Anar',
      comments: [],
    },
    {
      id: 4,
      titlle: 'For',
      body: 'Anar',
      comments: [],
    },
  ];
  return (
    <MainLayout>
      <div>Список постов</div>
      <Posts posts = {posts}/>
    </MainLayout>
  );
}
