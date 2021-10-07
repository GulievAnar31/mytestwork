import React from 'react';
import { IPosts } from '../types/posts';
import styles from '../styles/PostItem.module.scss';
import { useRouter } from 'next/dist/client/router';

interface PostItemProps {
  post: IPosts;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push('/posts/' + post.id)} className={styles.postItem}>
      <h1>
        {post.id ? post.id : 'Тип даннных не верен'}.{post.title ? post.title : 'Тип данных не верен'}
      </h1>
      <span>{post.body ? post.body : 'Тип данных не верен'}</span>
    </div>
  );
};

export default PostItem;
