import { twMerge } from 'tailwind-merge';

type Props = {
  step: number;
  maxStep: number;
  currentStep: number;
};

const Step = (props: Props) => {
  const isBetweenSteps = props.step > 1;
  const isCurrentStep = props.currentStep >= props.step;

  const commonBorderClasses = 'border-b-4 border-dotted border-gray-300';
  const activeBorderClasses = 'border-light-blue border-b-4 border-solid';

  return (
    <div className={`flex items-center ${isBetweenSteps && 'flex-1'}`}>
      {isBetweenSteps && (
        <div
          className={twMerge(
            'flex-1',
            commonBorderClasses,
            isCurrentStep && activeBorderClasses
          )}
        ></div>
      )}
      <div
        className={twMerge(
          'text-center border-2 flex justify-center items-center w-12 h-12 text-lg font-bold text-gray-500 rounded-full border-gray-300',
          `${props.step <= props.currentStep && 'step-gradient text-blue-500'}`
        )}
      >
        {props.step}
      </div>
    </div>
  );
};

export default Step;
