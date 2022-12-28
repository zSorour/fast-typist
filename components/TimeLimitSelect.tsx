import { ChangeEvent } from 'react';
import { useSPGameStore } from 'store/single-player-game';

const TimeLimitSelect = () => {
  const timeLimit = useSPGameStore((state) => state.timeLimit);
  const setTimeLimit = useSPGameStore((state) => state.setTimeLimit);
  const gameStatus = useSPGameStore((state) => state.gameStatus);

  const onSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setTimeLimit(Number(e.target.value));
  };

  console.log(gameStatus);

  return (
    <select
      className="form-select font-bold bg-secondary py-2 px-3 rounded-lg w-full hover:cursor-pointer disabled:cursor-not-allowed"
      value={timeLimit}
      onChange={onSelectHandler}
      disabled={gameStatus !== 'idle'}
    >
      <option value={1}>1 Second</option>
      <option value={2}>2 Seconds</option>
      <option value={3}>3 Seconds</option>
      <option value={4}>4 Seconds</option>
      <option value={5}>5 Seconds</option>
      <option value={7}>5 Seconds</option>
      <option value={10}>5 Seconds</option>
    </select>
  );
};
export default TimeLimitSelect;
