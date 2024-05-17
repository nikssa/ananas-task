import { useMemo, useState } from 'react';
import Filter from '../common/Filter';

import { LogProps, PostProps, UserProps } from '../../types';

import useAppContext from '../../hooks/useAppContext';
import PostList from '../common/PostList';

const Posts = ({ log }: LogProps) => {
  // log('Hello from', 'Posts component');

  const [keyword, setKeyword] = useState<string | null>(null);

  const { posts, users } = useAppContext();

  const filteredPosts = useMemo(() => {
    if (!keyword) {
      return posts;
    }

    const lowerCaseKeyword = keyword.toLowerCase();
    const userIds = users
      .filter(
        (user: UserProps) =>
          user.name.toLowerCase().includes(lowerCaseKeyword) ||
          user.username.toLowerCase().includes(lowerCaseKeyword)
      )
      .map((user: UserProps) => user.id);

    return posts.filter((post: PostProps) => userIds.includes(post.userId));
  }, [keyword, users, posts]);

  return (
    <>
      <h1>Posts</h1>
      <Filter log={log} filteredPosts={filteredPosts} setKeyword={setKeyword} />
      <PostList log={log} filteredPosts={filteredPosts} />
    </>
  );
};

export default Posts;
