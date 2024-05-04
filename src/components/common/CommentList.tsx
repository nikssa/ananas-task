import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { CommentListProps } from '../../types';

const CommentList = ({ log, comments, showBody }: CommentListProps) => {
  log('Hello from', 'CommentList component');
  return (
    <>
      <h3>
        Comments <span>({comments.length})</span>
      </h3>
      <ul className='comments'>
        {comments.map((comment) => {
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
