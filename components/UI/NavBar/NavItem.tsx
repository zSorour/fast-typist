import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
  to: string;
};

const NavItem = (props: Props) => {
  const router = useRouter();
  const isActive = router.pathname === props.to;

  return (
    <Link
      href={props.to}
      className={`p-5 font-bold hover:text-emerald-500 ${
        isActive ? 'text-emerald-400' : ''
      }`}
    >
      <li>{props.children}</li>
    </Link>
  );
};

export default NavItem;
