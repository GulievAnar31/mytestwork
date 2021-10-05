import { IPosts } from '../types/posts';
import React from 'react';
import PostItem from './PostItem';
import styles from '../styles/Posts.module.scss';
import { useRouter } from 'next/dist/client/router';

interface PostProps {
  posts: IPosts[];
}

const Posts: React.FC<PostProps> = ({ posts }) => {
  const router = useRouter();
  return (
    <div className={styles.posts}>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Posts;
