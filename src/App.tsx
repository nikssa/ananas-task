import { RouterProvider } from 'react-router-dom';
import { useRouter } from './hooks/useRouter';
import useAppContext from './hooks/useAppContext';
import Loader from './components/common/Loader';

const consoleLog = (propsMessage: string, componentName: string) => {
  console.log(`${propsMessage} ${componentName}`);
};

function App() {
  const router = useRouter(consoleLog);

  const { postsFetched, usersFetched, commentsFetched } = useAppContext();
  const showLoader = !postsFetched || !usersFetched || !commentsFetched;

  return (
    <>
      <Loader showLoader={showLoader} />
      <div className='app'>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
