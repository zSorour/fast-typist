import Footer from 'components/UI/Footer/Footer';
import NavBar from 'components/UI/NavBar/NavBar';
import Particles from './Particles';

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <NavBar />
      <Particles />
      <main className="flex-1 flex justify-self-stretch">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
