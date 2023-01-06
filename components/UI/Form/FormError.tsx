type Props = {
  children: React.ReactNode;
};

const FormError = (props: Props) => {
  return (
    <span className="p-2 bg-red-700 font-bold text-sm rounded-lg">
      {props.children}
    </span>
  );
};
export default FormError;
