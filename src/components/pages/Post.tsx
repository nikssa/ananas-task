import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../common/CommentList';
import { LogProps, PostProps, UserProps } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useAppContext from '../../hooks/useAppContext';
import { getUserByUserId } from '../../utils';

const Post = ({ log }: LogProps) => {
  log('Hello from', 'Post component');

  const { id } = useParams();

  const [post, setPost] = useState<PostProps | null>(null);
  const [responseStatus, setResponseStatus] = useState<number | null>(null);

  // DEV Fix: ignore variable and setTimeout is used to prevent API called twice
  useEffect(() => {
    let ignore = false;
    setTimeout(() => {
      if (!ignore) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response: Response) => {
            setResponseStatus(response.status);
            return response.json();
          })
          .then((json) => {
            setPost(json);
          });
      }
    }, 0);
    return () => {
      ignore = true;
    };
  }, [id]);

  // const { posts } = useAppContext();

  // useEffect(() => {
  //   if (!!posts) {
  //     const post = posts.find((post: PostProps) => post.id === Number(id));
  //     setPost(!!post ? post : null);
  //   }
  // }, [id, posts]);

  const { users } = useAppContext();
  const user: UserProps | undefined = getUserByUserId(post?.userId, users);

  return !!post && responseStatus === 200 ? (
    <>
      <span className='user'>
        <FontAwesomeIcon icon={faUser} /> {user?.name}
      </span>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <br />
      <CommentList log={log} postId={Number(id)} showBody={true} />
    </>
  ) : (
    <>
      <h1>No Post</h1>
      <p>There is no post with this ID</p>
    </>
  );
};

export default Post;
