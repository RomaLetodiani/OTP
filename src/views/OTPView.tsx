import { useEffect, useState } from 'react';
import BlockInputs from '../components/BlockInputs/BlockInputs';
import Button from '../components/UI/Button';

type Props = {
  onClick: (view: string) => void;
  value: string;
  length: number;
};

const OTPView = (props: Props) => {
  const [randomCode, setRandomCode] = useState('');
  const [errorCount, setErrorCount] = useState(0);
  const [OTP, setOTP] = useState(new Array(props.length).fill(''));
  const [correct, setCorrect] = useState(false);

  const val = props.value.includes('@') ? 'Email Address' : 'Phone Number';
  useEffect(() => {
    // Generate a random 4-digit code
    const generatedCode = Math.floor(1000 + Math.random() * 9000).toString();
    setRandomCode(generatedCode);
    setTimeout(() => {
      alert(
        `Welcome to the Frontend OTP Verification Demo!\nThank you for trying out this service!\nYour verification code is: ${generatedCode}\nPlease note:\n- After three unsuccessful attempts, OTP entry will be disabled.\n- In a real-world scenario, a secure backend service would handle code generation and validation.`
      );
    }, 500);
  }, []);

  const handleSubmit = (otp: string[]) => {
    if (errorCount < 2) {
      if (randomCode === otp.join('')) {
        props.onClick('success');
      } else {
        setErrorCount((prev) => prev + 1);
        setCorrect(true);
      }
    } else {
      props.onClick('failed');
    }
  };
  return (
    <div className="flex flex-col justify-between items-center">
      <div className="flex flex-col max-w-[270px] items-center justify-center text-center">
        <p className="max-w-52 text-sm tracking-wider">
          Verify the Code sent to your {val}:
        </p>
        <h2 className="px-2 py-1 rounded-lg border-b shadow-md mt-1">
          {props.value.length > 27
            ? props.value.slice(0, 27) + '...'
            : props.value}
        </h2>
      </div>

      <BlockInputs
        OTP={OTP}
        setOTP={setOTP}
        randomCode={randomCode}
        handleSubmit={handleSubmit}
        length={props.length}
      />
      {correct && (
        <div className="text-center text-warm-red font-bold text-sm">
          <p>Incorrect OTP. Please try again.</p>
          <p>You have {3 - errorCount} attempts left</p>
        </div>
      )}

      <Button
        className="button-gradient tracking-widest mt-3"
        onClick={() => handleSubmit(OTP)}
        text="Verify"
      />
    </div>
  );
};

export default OTPView;
