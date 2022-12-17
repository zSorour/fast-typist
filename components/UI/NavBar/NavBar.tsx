import Logo from '../Logo';
import NavItem from 'components/UI/NavBar/NavItem';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-5 bg-main bg-opacity-70 border-b-4 border-emerald-700 drop-shadow-2xlxl">
      <Logo />
      <ul className="flex">
        <NavItem to="/play">Play</NavItem>
        <NavItem to="/scoreboard">Scoreboard</NavItem>
      </ul>
    </nav>
  );
};

export default NavBar;
