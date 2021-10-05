import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MainLayout from '../../layouts/MainLayout';
import styles from '../../styles/PostItem.module.scss';

export default function index() {
  const { posts } = useTypedSelector((state) => state.posts);
  let elem = posts[Object.keys(posts)[Object.keys(posts).length - 1]];

  return (
    <MainLayout>
      <div>
        {elem ? (
          <div className={styles.postItem} key={elem.id}>
            <h1>{elem.title}</h1>
            <span>{elem.body}</span>
          </div>
        ) : (
          <h1>Зайдите в посты, что бы загрузить данные</h1>
        )}
      </div>
    </MainLayout>
  );
}
