import { RouterProvider } from 'react-router-dom';
import { useRouter } from './hooks/useRouter';

const consoleLog = (propsMessage: string, componentName: string) => {
  console.log(`${propsMessage} ${componentName}`);
};

function App() {
  const router = useRouter(consoleLog);

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
