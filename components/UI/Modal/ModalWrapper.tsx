import Portal from 'components/Portal';

type Props = {
  children: React.ReactNode;
};

const ModalWrapper = (props: Props) => {
  return (
    <Portal>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 bg-secondary rounded-2xl z-20 flex flex-col items-center justify-center">
        {props.children}
      </div>
    </Portal>
  );
};
export default ModalWrapper;
