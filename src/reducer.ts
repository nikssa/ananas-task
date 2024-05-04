// import React from 'react';
// import { CommentProps, PostProps, UserProps } from './types';

// type ContextProps = {
//   users: UserProps[];
//   usersFeched: boolean | null;
//   usersError: string | null;
//   posts: PostProps[];
//   postsFetched: boolean | null;
//   postsError: string | null;
//   comments: CommentProps[];
//   commentsFeched: boolean | null;
//   commentsError: string | null;
// };

export const initialState: any = {
  users: [],
  usersFetched: null,
  usersError: null,
  posts: [],
  //   postsLoading: false,
  postsFetched: null,
  postsError: null,
  comments: [],
  commentsFetched: null,
  commentsError: null,
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        postsFetched: true,
        postsError: null,
      };
    case 'FETCH_POSTS_FAILED':
      return {
        ...state,
        posts: [],
        postsFetched: false,
        postsError: 'Something went wrong during Posts fetching!',
      };

    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        usersFetched: true,
        usersError: null,
      };
    case 'FETCH_USERS_FAILED':
      return {
        ...state,
        users: [],
        usersFetched: false,
        usersError: 'Something went wrong during Posts fetching!',
      };

    case 'FETCH_COMMENTS_SUCCESS':
      return {
        ...state,
        comments: action.payload,
        commentsFetched: true,
        commentsError: null,
      };
    case 'FETCH_COMMENTS_FAILED':
      return {
        ...state,
        comments: [],
        commentsFetched: false,
        commentsError: 'Something went wrong during Posts fetching!',
      };

    default:
      return state;
  }
};
