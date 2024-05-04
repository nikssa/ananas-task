import { CommentProps, UserProps } from '../types';

export const getUserByUserId = (userId: number, users: UserProps[]) => {
  const user = users.find((user) => user.id === userId);
  return user;
};

export const getUserByPostId = () => {};

export const getAssociatedCommentsByPostId = (
  postId: number | undefined,
  comments: CommentProps[]
) => {
  const associatedComments = comments.filter(
    (comment) => comment.postId === postId
  );
  return associatedComments;
};
