import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { CommentProps } from '../../types';

const Comment = ({
  comment,
  showBody
}: {
  comment: CommentProps;
  showBody?: boolean;
}) => {
  return (
    <li>
      <h4>
        <FontAwesomeIcon icon={faMessage} size='sm' color='#999' />{' '}
        {comment.name}
      </h4>
      {showBody && <p>{comment.body}</p>}
    </li>
  );
};

export default Comment;
