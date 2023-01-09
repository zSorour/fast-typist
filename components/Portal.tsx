import useHasMounted from 'hooks/useHasMounted';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};

const Portal = (props: Props) => {
  const hasMounted = useHasMounted();

  return hasMounted
    ? createPortal(
        props.children,
        document.querySelector('#modal') as HTMLElement
      )
    : null;
};

export default Portal;
