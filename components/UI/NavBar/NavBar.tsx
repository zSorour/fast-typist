import { useAuthStore } from 'store/authentication';
import Logo from '../Logo';
import NavItem from 'components/UI/NavBar/NavItem';
import LoginModal from 'components/Login/LoginModal';
import LoginButton from './LoginButton';

const NavBar = () => {
  const isModalOpen = useAuthStore((selector) => selector.isModalOpen);
  const isLoggedIn = useAuthStore((selector) => selector.isLoggedIn);

  return (
    <>
      <nav className="flex justify-between items-center px-5 bg-main bg-opacity-70 border-b-4 border-emerald-700 drop-shadow-2xlxl">
        <Logo />
        <ul className="flex">
          <NavItem to="/play">Play</NavItem>
          <NavItem to="/scoreboard">Scoreboard</NavItem>
          {!isLoggedIn() && <LoginButton />}
        </ul>
      </nav>

      {isModalOpen && <LoginModal />}
    </>
  );
};

export default NavBar;
