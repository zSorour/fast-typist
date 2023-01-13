import Portal from 'components/UI/Portal';

type Props = {
  children: React.ReactNode;
};

const ModalWrapper = (props: Props) => {
  return (
    <Portal>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] bg-secondary rounded-2xl z-20 flex flex-col items-center justify-center md:w-96">
        {props.children}
      </div>
    </Portal>
  );
};
export default ModalWrapper;
