import { useEffect, useRef } from 'react';
import Input from '../UI/Input';

type Props = {
  length: number;
  randomCode: string;
  handleSubmit: (otp: string[]) => void;
  OTP: string[];
  setOTP: (arr: string[]) => void;
};

const BlockInputs = ({
  OTP,
  setOTP,
  length,
  randomCode,
  handleSubmit,
}: Props) => {
  const inputRefs = useRef<HTMLInputElement[] | null[]>(
    new Array(length).fill(null)
  );

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;
    const updatedOTP = [...OTP];
    updatedOTP[index] = value.substring(value.length - 1);
    setOTP(updatedOTP);
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (updatedOTP.length === length) {
      setTimeout(() => {
        updatedOTP.join('') === randomCode && handleSubmit(updatedOTP);
      }, 700);
    }
    if (value !== '' && index === length - 1) {
      inputRefs.current[index]?.blur();
    }
  };

  const handKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    switch (e.key) {
      case 'Backspace':
        if (!OTP[index] && index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
        break;
      case 'Enter':
        handleSubmit(OTP);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        if (index > 0) {
          const prevInput = inputRefs.current[index - 1];
          prevInput?.focus();

          // Set cursor position to the end of the input value
          setTimeout(() => {
            if (prevInput?.value) {
              const endPosition = prevInput.value.length;
              prevInput.setSelectionRange(endPosition, endPosition);
            }
          }, 0);
        } else {
          inputRefs.current[index]?.blur();
        }
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        if (index < length - 1) {
          const nextInput = inputRefs.current[index + 1];
          nextInput?.focus();

          // Set cursor position to the end of the input value
          setTimeout(() => {
            if (nextInput?.value) {
              const endPosition = nextInput.value.length;
              nextInput.setSelectionRange(endPosition, endPosition);
            }
          }, 0);
        } else {
          inputRefs.current[index]?.blur();
        }
        break;
      default:
        break;
    }
  };

  const handleOnClick = (index: number) => {
    inputRefs.current[index]?.setSelectionRange(1, 1);

    // Focus on the previous empty inputs
    let tempIndex = index;
    while (tempIndex > 0) {
      inputRefs.current[OTP.indexOf('')]?.focus();
      tempIndex -= 1;
    }

    // Focus on the next empty inputs
    tempIndex = index;
    while (tempIndex <= length - 1) {
      inputRefs.current[OTP.indexOf('')]?.focus();
      tempIndex += 1;
    }
  };

  return (
    <div className="flex justify-around items-center gap-2 mt-5 mb-2">
      {OTP.map((_, index) => {
        return (
          <Input
            key={index}
            id={index.toString()}
            inputRef={(input) => (inputRefs.current[index] = input)}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handKeyDown(e, index)}
            onClick={() => handleOnClick(index)}
            value={OTP[index]}
            inputClass="focus:border-light-blue focus:text-dark-blue w-12 h-12 pl-4 border-2 rounded-xl text-gray-500 text-2xl"
          />
        );
      })}
    </div>
  );
};

export default BlockInputs;
