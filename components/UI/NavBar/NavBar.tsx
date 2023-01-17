import { useAuthStore } from 'store/authentication';
import Logo from '../Logo';
import NavItem from 'components/UI/NavBar/NavItem';
import LoginModal from 'components/Login/LoginModal';
import LoginButton from './LoginButton';
import useHasMounted from 'hooks/useHasMounted';

const NavBar = () => {
  const isModalOpen = useAuthStore((selector) => selector.isModalOpen);
  const isLoggedIn = useAuthStore((selector) => selector.isLoggedIn);
  const hasMounted = useHasMounted();

  return (
    <>
      <nav className="flex justify-between items-center px-5 bg-main bg-opacity-70 border-b-4 border-emerald-700 drop-shadow-2xlxl">
        <Logo />
        <ul className="flex">
          <NavItem to="/practice">Play</NavItem>
          <NavItem to="/scoreboard">Scoreboard</NavItem>
          {!isLoggedIn() && hasMounted && <LoginButton />}
        </ul>
      </nav>

      {isModalOpen && <LoginModal />}
    </>
  );
};

export default NavBar;
