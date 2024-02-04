import Button from '../components/UI/Button';

type Props = {
  onClick: (view: string) => void;
  value: string;
};

const FailView = (props: Props) => {
  const val = props.value.includes('@') ? 'Email' : 'Phone Number';
  return (
    <div className="flex flex-col justify-between items-center gap-5">
      <div className=" flex flex-col items-center leading-4 text-warm-red">
        <p className=" text-sm">We could not verify the OTP</p>
        <p>sent to the {val}:</p>
        <h2 className="px-2 py-2 rounded-lg text-gray-500 border-b shadow-md mt-3">
          {props.value.length > 27
            ? props.value.slice(0, 27) + '...'
            : props.value}
        </h2>
      </div>
      <Button
        onClick={() => props.onClick('start')}
        className="button-gradient tracking-widest"
        text="Try again"
      />
    </div>
  );
};

export default FailView;
