import { useState } from 'react';
import OTPModal from './views/OTPModal';
import StartModal from './views/StartModal';
import SuccessModal from './views/SuccessModal';

const App = () => {
  const [view, setview] = useState('start');
  const handleViewChange = (view: string) => {
    setview(view);
  };
  return (
    <div>
      {view === 'start' && <StartModal onClick={handleViewChange} />}
      {view === 'otp' && <OTPModal onClick={handleViewChange} />}
      {view == 'success' && <SuccessModal onClick={handleViewChange} />}
    </div>
  );
};

export default App;
