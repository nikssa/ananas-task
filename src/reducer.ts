import { Dispatch } from 'react';
import { CommentProps, PostProps, UserProps } from './types';

type ActionProps = {
  type: string;
  payload?: any;
};

export type StateProps = {
  users: UserProps[];
  usersFetched: boolean | null;
  usersError: string | null;
  posts: PostProps[];
  postsFetched: boolean | null;
  postsError: string | null;
  comments: CommentProps[];
  commentsFetched: boolean | null;
  commentsError: string | null;
  dispatch?: Dispatch<ActionProps>;
};

export const initialState: StateProps = {
  users: [],
  usersFetched: null,
  usersError: null,
  posts: [],
  postsFetched: null,
  postsError: null,
  comments: [],
  commentsFetched: null,
  commentsError: null
};

export const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        postsFetched: true,
        postsError: null
      };
    case 'FETCH_POSTS_FAILED':
      return {
        ...state,
        posts: [],
        postsFetched: false,
        postsError: 'Something went wrong during Posts fetching!'
      };

    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        usersFetched: true,
        usersError: null
      };
    case 'FETCH_USERS_FAILED':
      return {
        ...state,
        users: [],
        usersFetched: false,
        usersError: 'Something went wrong during Posts fetching!'
      };

    case 'FETCH_COMMENTS_SUCCESS':
      return {
        ...state,
        comments: action.payload,
        commentsFetched: true,
        commentsError: null
      };
    case 'FETCH_COMMENTS_FAILED':
      return {
        ...state,
        comments: [],
        commentsFetched: false,
        commentsError: 'Something went wrong during Posts fetching!'
      };

    default:
      return state;
  }
};
