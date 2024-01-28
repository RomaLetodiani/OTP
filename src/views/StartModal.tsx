type Props = {
  onClick: (view: string) => void;
};

const StartModal = (props: Props) => {
  return (
    <div>
      <button onClick={() => props.onClick('otp')}>Start</button>
    </div>
  );
};

export default StartModal;
