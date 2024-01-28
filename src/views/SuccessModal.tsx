type Props = {
  onClick: (view: string) => void;
};

const SuccessModal = (props: Props) => {
  return (
    <div>
      <button onClick={() => props.onClick('start')}>Success</button>
    </div>
  );
};

export default SuccessModal;
