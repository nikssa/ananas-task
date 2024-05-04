import { useEffect, useState } from 'react';
import Filter from '../common/Filter';

import { LogProps, PostProps, UserProps } from '../../types';

import useAppContext from '../../hooks/useAppContext';
import PostList from '../common/PostList';

const Posts = ({ log }: LogProps) => {
  log('Hello from', 'Posts component');

  const [keyword, setKeyword] = useState<string | null>(null);

  const { state } = useAppContext();

  const posts: PostProps[] = state.posts;

  const users: UserProps[] = state.users;

  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);

  useEffect(() => {
    if (!!keyword) {
      const filteredUsers = users.filter(
        (user) =>
          user.name.toLowerCase().includes(keyword.toLowerCase()) ||
          user.username.toLowerCase().includes(keyword.toLowerCase())
      );
      const userIds = filteredUsers.map((user) => user.id);
      const filteredPosts = posts.filter((post) => {
        const filtered = userIds.filter((id) => post.userId === id);
        return filtered.length > 0;
      });
      setFilteredPosts(filteredPosts);
    } else {
      setFilteredPosts(posts);
    }
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
