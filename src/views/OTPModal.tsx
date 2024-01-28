type Props = {
  onClick: (view: string) => void;
};

const OTPModal = (props: Props) => {
  return (
    <div>
      <button onClick={() => props.onClick('success')}>OTP</button>
    </div>
  );
};

export default OTPModal;
