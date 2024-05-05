// import Logo from '../common/Logo';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../common/LogoIcon';

const Header = () => {
  return (
    <header>
      <NavLink to={`/`} className='logo'>
        <LogoIcon />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink
              to={'/posts'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
