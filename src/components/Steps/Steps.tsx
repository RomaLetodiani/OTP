import Step from './Step';

type Props = {
  maxSteps: number;
  currentStep: number;
  className?: string;
};

const Steps = (props: Props) => {
  return (
    <div className="flex justify-between items-center mb-5">
      {[...Array(props.maxSteps)].map((_, index) => {
        return (
          <Step
            key={index}
            step={index + 1}
            maxStep={props.maxSteps}
            currentStep={props.currentStep}
          />
        );
      })}
    </div>
  );
};

export default Steps;
