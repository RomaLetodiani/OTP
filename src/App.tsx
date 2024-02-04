import { useState } from 'react';
import OTPView from './views/OTPView';
import StartView from './views/StartView';
import SuccessView from './views/SuccessView';
import Steps from './components/Steps/Steps';
import FailView from './views/FailView';

const App = () => {
  const [view, setView] = useState('start');
  const [value, setValue] = useState('');
  const [step, setSteps] = useState(1);
  const handleViewChange = (nextView: string) => {
    switch (nextView) {
      case 'start':
        setSteps(1);
        break;
      case 'otp':
        setSteps(2);
        break;
      case 'success':
        setSteps(3);
        break;
      case 'failed':
        setSteps(3);
        break;
    }
    setView(nextView);
  };
  return (
    <div className="min-h-screen min-w-[280px] flex justify-center items-center bg-gradient-to-tr from-light-blue to-light-pink">
      <div className="max-w-xs w-full bg-[#ffffff] text-gray-700 shadow-2xl m-5 p-5 rounded-2xl">
        <Steps maxSteps={3} currentStep={step} />
        {view === 'start' && (
          <StartView
            value={value}
            setValue={setValue}
            onClick={handleViewChange}
          />
        )}
        {view === 'otp' && (
          <OTPView length={4} value={value} onClick={handleViewChange} />
        )}
        {view === 'success' && (
          <SuccessView value={value} onClick={handleViewChange} />
        )}
        {view === 'failed' && (
          <FailView value={value} onClick={handleViewChange} />
        )}
      </div>
    </div>
  );
};

export default App;
