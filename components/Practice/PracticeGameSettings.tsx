import PlayButton from 'components/shared/PlayButton';
import TimeLimitSelect from 'components/shared/TimeLimitSelect';
import { usePracticeStore } from 'store/practice-store';

const PracticeGameSettings = () => {
  const setTimeLimit = usePracticeStore((state) => state.setTimeLimit);
  const timeLimit = usePracticeStore((state) => state.timeLimit);
  const gameStatus = usePracticeStore((state) => state.gameStatus);
  const startGame = usePracticeStore((state) => state.startGame);
  const stopGame = usePracticeStore((state) => state.stopGame);

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
export default PracticeGameSettings;
