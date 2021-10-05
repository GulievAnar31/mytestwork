import { PostActionTypes, PostAction, PostsState } from '../../types/posts';

const initalState: PostsState = {
  posts: [],
  error: '',
};

export const postReducer = (state = initalState, action: PostAction): PostsState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS_ERROR:
      return { ...state, error: action.payload };
    case PostActionTypes.FETCH_POSTS:
      return { error: '', posts: action.payload };
    case PostActionTypes.ADD_POST: {
      let newPost = {
        id: action.id,
        title: action.title,
        body: action.body,
        comments: [],
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    default:
      return state;
  }
};
