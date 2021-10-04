import { IPosts } from "../types/posts";
import React from 'react'
import PostItem from './PostItem';

interface PostProps{
    posts: IPosts[]
}

const Posts: React.FC<PostProps> = ({posts}) => {
    return (
        <div>
            {posts.map(post => {
              return  <PostItem 
                key = {post.id}
                post = {post}
                />
            })}
        </div>
    )
}

export default Posts;
