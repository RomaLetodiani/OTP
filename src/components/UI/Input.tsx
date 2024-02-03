import { twMerge } from 'tailwind-merge';

export type InputProps = {
  inputClass?: string;
  value?: string;
  id?: string;
  hasError?: boolean;
  errorMessage?: string;
  type?: string;
  label?: string;
  focus?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
};

const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col relative w-full">
      <label
        className={`absolute left-3 pointer-events-none transition-all ${
          props.focus
            ? 'text-[10px] top-1'
            : 'text-sm translate-x-0 -translate-y-1/2  top-1/2'
        } ${props.hasError && 'text-red-500'}`}
        htmlFor={props.id}
      >
        {props.hasError ? props.errorMessage : props.label}
      </label>
      <input
        type={props.type ?? 'text'}
        id={props.id}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        value={props.value}
        className={twMerge(
          'rounded-lg border border-gray-300 outline-none text-sm',
          props.inputClass,
          `${props.hasError && 'border-red-500 text-red-500'}`
        )}
      />
    </div>
  );
};

export default Input;
