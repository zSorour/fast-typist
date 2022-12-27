type Props = {
  children: React.ReactNode;
};

const ModalBody = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 gap-5">
      {props.children}
    </div>
  );
};
export default ModalBody;
