import { twMerge } from 'tailwind-merge';

export type InputProps = {
  inputClass?: string;
  value?: string;
  id?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  hasError?: boolean;
  maxLength?: number;
  errorMessage?: string;
  type?: string;
  label?: string;
  focus?: boolean;
  onClick?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
};

const Input = (props: InputProps) => {
  const labelClassName = `absolute left-3 pointer-events-none transition-all ${
    props.focus
      ? 'text-[10px] top-1'
      : 'text-sm translate-x-0 -translate-y-1/2 top-1/2'
  } ${props.hasError ? 'text-red-500' : ''}`;

  const inputClassName = twMerge(
    'w-full rounded-lg border border-gray-300 outline-none text-sm',
    props.inputClass,
    props.hasError && 'border-warm-red text-warm-red'
  );
  return (
    <div className="relative w-full">
      {props.label && (
        <label className={labelClassName} htmlFor={props.id}>
          {props.hasError ? props.errorMessage : props.label}
        </label>
      )}
      <input
        autoComplete="off"
        type={props.type ?? 'text'}
        id={props.id}
        ref={props.inputRef}
        onChange={props.onChange}
        onClick={props.onClick}
        onKeyDown={props.onKeyDown}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        value={props.value}
        className={inputClassName}
      />
    </div>
  );
};

export default Input;
