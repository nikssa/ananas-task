import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../common/CommentList';
import { LogProps, PostProps, UserProps } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useAppContext from '../../hooks/useAppContext';
import { getUserByUserId } from '../../utils';

const Post = ({ log }: LogProps) => {
  // log('Hello from', 'Post component');

  const { id } = useParams();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<PostProps | null>(null);

  // DEV Fix: ignore variable and setTimeout is used to prevent API called twice
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json: PostProps) => {
        setPost(json);
        setLoading(false);
      })
      .catch((error: Error) => {
        console.error('Error fetching post:', error);
        // Handle error state here if needed
        setError('Error fetching post. Please try again later.');
        setLoading(false);
      });
  }, [id]);

  const { users } = useAppContext();
  const user: UserProps | undefined = getUserByUserId(post?.userId, users);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return !!post ? (
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
