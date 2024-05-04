import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/pages/Home';
import NotFound from '../components/pages/NotFound';
import Posts from '../components/pages/Posts';
import Post from '../components/pages/Post';
import Layout from '../components/layout/Layout';
import About from '../components/pages/About';

export const useRouter = (consoleLog: any) => {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      errorElement: <NotFound log={consoleLog} />,
      // child route components
      children: [
        {
          path: '/',
          element: <Home log={consoleLog} />,
        },
        {
          path: 'posts',
          element: <Posts log={consoleLog} />,
        },
        {
          path: 'posts/:id',
          element: <Post log={consoleLog} />,
        },
        {
          path: 'about',
          element: <About log={consoleLog} />,
        },
      ],
    },
  ]);
  return router;
};
