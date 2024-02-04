import { useEffect, useState } from 'react';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import { useInput } from '../components/shared/hooks/UseInput';

type Props = {
  onClick: (view: string) => void;
  value: string;
  setValue: (value: string) => void;
};

const StartView = (props: Props) => {
  const [inputView, setInputView] = useState('email');

  const handleInputViewChange = (view: 'email' | 'phone') => {
    setInputView(view);
  };

  const {
    value: emailValue,
    focus: emailFocus,
    hasError: emailHasError,
    onChange: emailOnChange,
    onBlur: emailOnBlur,
    onFocus: emailOnFocus,
  } = useInput((email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

  const {
    value: phoneValue,
    focus: phoneFocus,
    hasError: phoneHasError,
    onChange: phoneOnChange,
    onBlur: phoneOnBlur,
    onFocus: phoneOnFocus,
  } = useInput((phone: string) => {
    const phoneRegex =
      /^(\+\d{3}\s?)?\(?[\s.-]?\d{3}\)?[\s.-]?\d{2}[\s.-]?\d{2}[\s.-]?\d{2}$/;
    const phoneRegexVol2 = /^(\+\d{3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{3}$/;
    const sanitizedPhone = phone.replace(/[-\s]/g, '');
    const shortPhoneRegex = /^\d{9}$/;

    return (
      phoneRegex.test(phone) ||
      phoneRegexVol2.test(phone) ||
      shortPhoneRegex.test(sanitizedPhone)
    );
  });

  useEffect(() => {
    const valueToSet = inputView === 'email' ? emailValue : phoneValue;
    props.setValue(valueToSet);
  }, [inputView, emailValue, phoneValue]);

  const handleSubmit = () => {
    const hasError =
      (inputView === 'email' && emailHasError) ||
      (inputView === 'phone' && phoneHasError);

    if (props.value && !hasError) {
      props.onClick('otp');
    }
  };
  return (
    <div className="flex flex-col justify-between items-center gap-5">
      <div>
        <Button
          text="Email"
          onClick={() => handleInputViewChange('email')}
          className={`text-gray-500 ${
            inputView === 'email' && 'button-gradient text-white'
          }  border-gray-500 border px-2 pl-3 py-1 text-sm font-bold rounded-none rounded-s-full`}
        />
        <Button
          text="Phone"
          onClick={() => handleInputViewChange('phone')}
          className={`text-gray-500 ${
            inputView === 'phone' && 'phoneView-gradient text-white'
          }  border-gray-500 border border-l-0 px-2 pr-3 py-1 text-sm font-bold rounded-none rounded-e-full`}
        />
      </div>
      <p className="text-sm text-center max-w-[270px]">
        Please enter your Email or Phone Number to receive a one-time password
      </p>
      {inputView === 'email' && (
        <Input
          inputClass="pt-4 px-3 pb-1"
          label={emailValue ? 'Email Address' : 'Enter your Email Address'}
          id="email"
          type="email"
          value={emailValue}
          focus={emailFocus}
          hasError={emailHasError}
          errorMessage="Enter Valid Email Address"
          onBlur={emailOnBlur}
          onFocus={emailOnFocus}
          onChange={emailOnChange}
        />
      )}
      {inputView === 'phone' && (
        <Input
          inputClass="pt-4 px-3 pb-1"
          label={phoneValue ? 'Phone Number' : 'Enter your Phone Number'}
          errorMessage="Enter Valid Phone Number"
          id="phone"
          type="tel"
          value={phoneValue}
          focus={phoneFocus}
          hasError={phoneHasError}
          onBlur={phoneOnBlur}
          onFocus={phoneOnFocus}
          onChange={phoneOnChange}
        />
      )}
      <Button
        className="button-gradient tracking-widest"
        text="Submit"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default StartView;
