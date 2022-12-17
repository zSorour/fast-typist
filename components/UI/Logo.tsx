import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="p-4">
      <h1 className="font-bold text-3xl animate-text gradient-text-main">
        Fast Typist
      </h1>
    </Link>
  );
};

export default Logo;
