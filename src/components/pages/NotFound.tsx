import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { LogProps } from '../../types';

const NotFound = ({ log }: LogProps) => {
  log('Hello from', 'NotFound component');
  return (
    <>
      <Header />
      <main>
        <h1>404 Error</h1>
        <p>Page was not found.</p>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
