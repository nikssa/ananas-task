import { CommentListProps, CommentProps } from '../../types';
import useAppContext from '../../hooks/useAppContext';
import Comment from './Comment';
import { useMemo } from 'react';

const getAssociatedCommentsByPostId = (
  postId: number | undefined,
  comments: CommentProps[]
): CommentProps[] => {
  const associatedComments = comments.filter(
    (comment) => comment.postId === postId
  );
  return associatedComments;
};

const CommentList = ({ log, postId, showBody }: CommentListProps) => {
  log('Hello from', 'CommentList component');

  const { comments } = useAppContext();

  const associatedComments: CommentProps[] = useMemo<CommentProps[]>(
    () => getAssociatedCommentsByPostId(postId, comments),
    [comments, postId]
  );

  return (
    <div key={postId}>
      <h3>
        Comments <span>({associatedComments.length})</span>
      </h3>
      <ul className='comments'>
        {associatedComments.map((comment) => {
          return (
            <Comment key={comment.id} comment={comment} showBody={showBody} />
          );
        })}
      </ul>
    </div>
  );
};

export default CommentList;
