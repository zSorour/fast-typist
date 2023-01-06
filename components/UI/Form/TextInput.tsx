type Props = {
  label: string | null;
} & React.InputHTMLAttributes<HTMLInputElement>;

import { forwardRef } from 'react';

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ label, ...rest }: Props, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="font-bold text-lg" htmlFor={rest.id}>
            {label}
          </label>
        )}
        <input
          className="form-input bg-gray-300 rounded-lg"
          {...rest}
          ref={ref}
        />
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
