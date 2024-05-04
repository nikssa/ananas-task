import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { CommentListProps, CommentProps, UserProps } from '../../types';
import useAppContext from '../../hooks/useAppContext';
import { getAssociatedCommentsByPostId } from '../../utils';

const CommentList = ({ log, postId, showBody }: CommentListProps) => {
  log('Hello from', 'CommentList component');

  const { state } = useAppContext();

  // console.log('CommentList state: ', state);

  const users: UserProps[] = state.users;

  const comments: CommentProps[] = state.comments;

  const associatedComments: CommentProps[] = getAssociatedCommentsByPostId(
    postId,
    comments
  );

  return (
    <>
      <h3>
        Comments <span>({associatedComments.length})</span>
      </h3>
      <ul className='comments'>
        {associatedComments.map((comment) => {
          return (
            <li key={comment.id}>
              <h4>
                <FontAwesomeIcon icon={faMessage} size='sm' color='#999' />{' '}
                {comment.name}
              </h4>
              {showBody && <p>{comment.body}</p>}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CommentList;
