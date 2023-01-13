type Props = {
  onClick?: () => void;
};

const Backdrop = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className="left-0 top-0 fixed z-10 w-screen h-screen bg-black/90"
    ></div>
  );
};
export default Backdrop;
