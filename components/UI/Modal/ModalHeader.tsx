type Props = {
  onClose: () => void;
};

const ModalHeader = (props: Props) => {
  return (
    <div className="flex justify-end w-full p-4 h-fit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 hover:cursor-pointer text-red-500 hover:text-red-400"
        onClick={props.onClose}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};
export default ModalHeader;
