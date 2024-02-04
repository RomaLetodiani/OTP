import { twMerge } from 'tailwind-merge';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, className, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={twMerge(
        'border-light-blue border shadow-md rounded-lg px-5 py-1 text-sm font-bold text-white',
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
