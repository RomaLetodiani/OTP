import Button from '../components/UI/Button';

type Props = {
  onClick: (view: string) => void;
  value: string;
};

const SuccessView = (props: Props) => {
  const val = props.value.includes('@') ? 'Email' : 'Phone Number';
  return (
    <div className="flex flex-col items-center justify-between">
      <h1 className="text-2xl text-mint-green font-bold uppercase">Success!</h1>
      <p className="text-xs min-[322px]:text-sm text-mint-green-700 text-center mt-2 mb-5">
        Your {val} is now verified. <br /> Thank you for confirming your
        identity!
      </p>
      <Button
        onClick={() => props.onClick('start')}
        className="button-gradient tracking-widest"
        text="Start Again"
      />
    </div>
  );
};

export default SuccessView;
