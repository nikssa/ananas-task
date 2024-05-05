import useAppContext from '../../hooks/useAppContext';
import { PostListProps, UserProps } from '../../types';
import Post from './Post';

const getUserByUserId = (userId: number, users: UserProps[]) => {
  const user = users.find((user) => user.id === userId);
  return user;
};

const PostList = ({ log, filteredPosts }: PostListProps) => {
  log('Hello from', 'PostList component');

  const { users } = useAppContext();

  return (
    <ul className='posts'>
      {filteredPosts?.length > 0 ? (
        filteredPosts.map((post) => {
          const user: UserProps | undefined = getUserByUserId(
            post.userId,
            users
          );
          return (
            <Post key={post.id} log={log} post={post} userName={user?.name} />
          );
        })
      ) : (
        <li>
          <p>Your search criteria produced no results.</p>
        </li>
      )}
    </ul>
  );
};

export default PostList;
