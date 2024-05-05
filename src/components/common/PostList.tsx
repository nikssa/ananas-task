import useAppContext from '../../hooks/useAppContext';
import { PostListProps, UserProps } from '../../types';
import { getUserByUserId } from '../../utils';
import Post from './Post';

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
