import { twMerge } from 'tailwind-merge';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = (props: Props) => {
  return (
    <button
      {...props}
      className={twMerge(
        'border-light-blue border shadow-md rounded-lg px-5 py-1 text-sm font-bold text-white',
        props.className
      )}
    >
      {props.text}
    </button>
  );
};

export default Button;
