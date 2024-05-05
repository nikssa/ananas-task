import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { PostProps } from '../../types';
import { Link } from 'react-router-dom';
import CommentList from './CommentList';

const Post = ({
  log,
  post,
  userName
}: {
  log: (message: string, name: string) => void;
  post: PostProps;
  userName: string | undefined;
}) => {
  return (
    <li>
      <span>
        <FontAwesomeIcon icon={faUser} /> {userName}
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
};

export default Post;
