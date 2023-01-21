import PlayButton from 'components/shared/PlayButton';
import TimeLimitSelect from 'components/shared/TimeLimitSelect';
import { useSPGameStore } from 'store/sp-game-store';

const SPGameSettings = () => {
  const setTimeLimit = useSPGameStore((state) => state.setTimeLimit);
  const timeLimit = useSPGameStore((state) => state.timeLimit);
  const gameStatus = useSPGameStore((state) => state.gameStatus);
  const startGame = useSPGameStore((state) => state.startGame);
  const stopGame = useSPGameStore((state) => state.stopGame);

  const onPlayBtnClickHandler = () => {
    if (gameStatus === 'playing') {
      stopGame();
    } else {
      startGame();
    }
  };

  const onTimeLimitChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTimeLimit(parseInt(e.target.value));
  };

  return (
    <div className="flex justify-between gap-2 md:self-center md:w-[65%]">
      <PlayButton gameStatus={gameStatus} onClick={onPlayBtnClickHandler} />
      <TimeLimitSelect
        timeLimit={timeLimit}
        onChange={onTimeLimitChangeHandler}
        gameStatus={gameStatus}
      />
    </div>
  );
};
export default SPGameSettings;
