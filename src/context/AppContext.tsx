import { createContext, useEffect, useReducer, useRef } from 'react';
import { StateProps, initialState, reducer } from '../reducer';
import {
  AppContextProviderProps,
  CommentProps,
  PostProps,
  UserProps
} from '../types';

const AppContext = createContext<StateProps>(initialState);

export const AppContextProvider = (props: AppContextProviderProps) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  // DEV Fix: Prevent calling APIs twice (useEffect)
  const postsFetching = useRef<boolean>(false);
  const usersFetching = useRef<boolean>(false);
  const commentsFetching = useRef<boolean>(false);

  useEffect(() => {
    if (state.postsFetched === null && !postsFetching.current) {
      postsFetching.current = true;
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json: PostProps[]) => {
          const jsonSorted = json.sort((a, b) =>
            (a.title || '').localeCompare(b.title || '')
          );
          dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: jsonSorted });
        })
        .catch((error) => {
          dispatch({ type: 'FETCH_POSTS_FAILED' });
        });
    }
  }, [state.postsFetched]);

  useEffect(() => {
    if (state.usersFetched === null && !usersFetching.current) {
      usersFetching.current = true;
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json: UserProps[]) => {
          dispatch({ type: 'FETCH_USERS_SUCCESS', payload: json });
        })
        .catch((error) => {
          dispatch({ type: 'FETCH_USERS_FAILED' });
        });
    }
  }, [state.usersFetched]);

  useEffect(() => {
    if (state.commentsFetched === null && !commentsFetching.current) {
      commentsFetching.current = true;
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((json: CommentProps[]) => {
          dispatch({ type: 'FETCH_COMMENTS_SUCCESS', payload: json });
        })
        .catch((error) => {
          dispatch({ type: 'FETCH_COMMENTS_FAILED' });
        });
    }
  }, [state.commentsFetched]);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
