import TimeLimitSelect from 'components/shared/TimeLimitSelect';
import { usePracticeStore } from 'store/practice-store';

const PracticeTimeLimitSelect = () => {
  const setTimeLimit = usePracticeStore((state) => state.setTimeLimit);
  const timeLimit = usePracticeStore((state) => state.timeLimit);
  const gameStatus = usePracticeStore((state) => state.gameStatus);

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeLimit(parseInt(e.target.value));
  };

  return (
    <TimeLimitSelect
      onChange={onChangeHandler}
      gameStatus={gameStatus}
      timeLimit={timeLimit}
    />
  );
};
export default PracticeTimeLimitSelect;
