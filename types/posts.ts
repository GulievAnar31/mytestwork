export interface IComment {
  body: string;
  postId: number;
  id: number;
}

export interface IPosts {
  id: number;
  title: string;
  body: string;
  comments: IComment[];
}

export interface PostsState {
  posts: IPosts[];
  error: string;
}

export enum PostActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  ADD_POST = 'ADD_POST',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}

interface FetchAction {
  type: PostActionTypes.FETCH_POSTS;
  payload: IPosts[];
}

interface AddPostAction {
  [x: string]: any;
  type: PostActionTypes.ADD_POST;
  payload: string;
}

interface FetchPostsErrorAction {
  type: PostActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

export type PostAction = FetchAction | AddPostAction | FetchPostsErrorAction;
