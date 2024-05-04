import { Link } from 'react-router-dom';
import CommentList from '../common/CommentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useAppContext from '../../hooks/useAppContext';
import { PostListProps, UserProps } from '../../types';

const PostList = ({ log, filteredPosts }: PostListProps) => {
  log('Hello from', 'PostList component');

  const { state } = useAppContext();

  const users: UserProps[] = state.users;

  const getUserByUserId = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    return user;
  };

  return (
    <ul className='posts'>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => {
          const user: any = getUserByUserId(post.userId);
          return (
            <li key={post.id}>
              <span>
                <FontAwesomeIcon icon={faUser} /> {user?.name}
              </span>
              <br />
              <h2>
                <Link to={`${post.id}`} target='blank'>
                  {post.title}
                </Link>
              </h2>
              <CommentList log={log} postId={post.id} />
            </li>
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
