import React from 'react'
import { IPosts } from '../types/posts';

interface PostItemProps {
    post: IPosts;
}

const PostItem: React.FC<PostItemProps> = ({post}) => {
    return (
        <div>
            {post.titlle}
        </div>
    )
}

export default PostItem;
