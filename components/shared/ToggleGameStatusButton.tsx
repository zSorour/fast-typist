type Props = {
  gameStatus: 'idle' | 'playing' | 'game-over';
  onClick: () => void;
};

const ToggleGameStatusButton = (props: Props) => {
  let btnColor =
    props.gameStatus === 'playing' ? 'bg-red-600' : 'bg-emerald-700';
  let btnText = props.gameStatus === 'playing' ? 'Stop' : 'Start';

  return (
    <button
      className={`${btnColor} text-white font-bold py-2 px-10 rounded-lg`}
      onClick={props.onClick}
    >
      {btnText}
    </button>
  );
};
export default ToggleGameStatusButton;
