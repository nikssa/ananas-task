import React from 'react';
import { Link } from 'react-router-dom';
import CommentList from '../common/CommentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useAppContext from '../../hooks/useAppContext';
import { CommentProps, PostListProps, PostProps, UserProps } from '../../types';

const PostList = ({ log, filteredPosts }: PostListProps) => {
  log('Hello from', 'PostList component');

  const { state } = useAppContext();

  //   const posts: PostProps[] = state.posts;

  const users: UserProps[] = state.users;

  const comments: CommentProps[] = state.comments;

  const getUserByUserId = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    return user;
  };

  const getAssociatedCommentsByPostId = (postId: number) => {
    const associatedComments = comments.filter(
      (comment) => comment.postId === postId
    );

    return associatedComments;
  };

  return (
    <ul className='posts'>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => {
          const user: any = getUserByUserId(post.userId);
          const associatedComments = getAssociatedCommentsByPostId(post.id);

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

              <CommentList log={log} comments={associatedComments} />
            </li>
          );
        })
      ) : (
        <li>
          <p>Your search criteria has no results.</p>
        </li>
      )}
    </ul>
  );
};

export default PostList;
