import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../common/CommentList';
import { LogProps } from '../../types';
import useAppContext from '../../hooks/useAppContext';

const Post = ({ log }: LogProps) => {
  log('Hello from', 'Post component');

  const { id } = useParams();

  const [post, setPost] = useState<{
    id: number;
    userId: number;
    title: string;
    body: string;
  } | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
      });
  }, [id]);

  const { state, dispatch } = useAppContext();
  console.log('Post - state', state);

  const comments = state.comments;

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <br />
      <CommentList log={log} comments={comments} showBody={true} />
    </>
  );
};

export default Post;
