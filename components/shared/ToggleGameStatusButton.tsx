import { useSPGameStore } from 'store/single-player-game';

const ToggleGameStatusButton = () => {
  const startGame = useSPGameStore((state) => state.startGame);
  const stopGame = useSPGameStore((state) => state.stopGame);
  const gameStatus = useSPGameStore((state) => state.gameStatus);

  let btnColor = gameStatus === 'playing' ? 'bg-red-600' : 'bg-emerald-700';
  let btnText = gameStatus === 'playing' ? 'Stop' : 'Start';

  const onClickHandler = () => {
    if (gameStatus === 'playing') {
      stopGame();
    } else {
      startGame();
    }
  };

  return (
    <button
      className={`${btnColor} text-white font-bold py-2 px-10 rounded-lg`}
      onClick={onClickHandler}
    >
      {btnText}
    </button>
  );
};
export default ToggleGameStatusButton;
