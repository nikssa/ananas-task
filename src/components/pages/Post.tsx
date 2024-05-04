import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../common/CommentList';
import { LogProps, PostProps } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import useAppContext from '../../hooks/useAppContext';

const Post = ({ log }: LogProps) => {
  log('Hello from', 'Post component');

  const { id } = useParams();

  const [post, setPost] = useState<PostProps | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
      });
  }, [id]);

  // const { state, dispatch } = useAppContext();

  return (
    <>
      <span>
        <FontAwesomeIcon icon={faUser} /> user.name
      </span>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <br />
      <CommentList log={log} postId={Number(id)} showBody={true} />
    </>
  );
};

export default Post;
