type Props = {
  label: string | null;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({ label, ...rest }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="font-bold text-lg" htmlFor={rest.id}>
          {label}
        </label>
      )}
      <input className="form-input bg-gray-300 rounded-lg" {...rest} />
    </div>
  );
};
export default TextInput;
