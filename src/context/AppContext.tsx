import { createContext, useEffect, useReducer, useRef } from 'react';
import { initialState, reducer } from '../reducer';

const AppContext = createContext(initialState);

export const AppContextProvider = (props: any) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const postsLoading = useRef<boolean>(false);
  const usersLoading = useRef<boolean>(false);
  const commentsLoading = useRef<boolean>(false);

  useEffect(() => {
    if (state.postsFetched === null && !postsLoading.current) {
      postsLoading.current = true;
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json: any[]) => {
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
    if (state.usersFetched === null && !usersLoading.current) {
      usersLoading.current = true;
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json: any[]) => {
          dispatch({ type: 'FETCH_USERS_SUCCESS', payload: json });
        })
        .catch((error) => {
          dispatch({ type: 'FETCH_USERS_FAILED' });
        });
    }
  }, [state.usersFetched]);

  useEffect(() => {
    if (state.commentsFetched === null && !commentsLoading.current) {
      commentsLoading.current = true;
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((json: any[]) => {
          dispatch({ type: 'FETCH_COMMENTS_SUCCESS', payload: json });
        })
        .catch((error) => {
          dispatch({ type: 'FETCH_COMMENTS_FAILED' });
        });
    }
  }, [state.commentsFetched]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
