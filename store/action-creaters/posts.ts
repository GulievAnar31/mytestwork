import { PostAction, PostActionTypes } from "../../types/posts";
import axios from 'axios';
import { Dispatch } from 'react';


export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const response = await axios.get('https://simple-blog-api.crew.red/posts');
      dispatch({ type: PostActionTypes.FETCH_POSTS, payload: response.data });
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: 'Произошла ошибка при загрузке треков',
      });
    }
  };
};


export const addPostActionCreator = (title: string, body: string, id: number) =>{
    return { type: PostActionTypes.ADD_POST, title, id, body  } as const;
}
  
