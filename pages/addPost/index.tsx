import { useRouter } from 'next/dist/client/router';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';

export default function index() {
    const router = useRouter()
  return (
    <MainLayout>
      <div>Добавить пост</div>
      <button onClick = {() => router.push('/posts/create')}>Добавить</button>
    </MainLayout>
  );
}
