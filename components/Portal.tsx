import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};

const Portal = (props: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        props.children,
        document.querySelector('#modal') as HTMLElement
      )
    : null;
};

export default Portal;
