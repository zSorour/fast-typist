import { ChangeEvent } from 'react';
import { useSPGameStore } from 'store/single-player-game';

const TimeLimitSelect = () => {
  const timeLimit = useSPGameStore((state) => state.timeLimit);
  const setTimeLimit = useSPGameStore((state) => state.setTimeLimit);

  const onSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setTimeLimit(Number(e.target.value));
  };

  return (
    <select
      className="font-bold bg-secondary py-2 px-3 rounded-lg w-full hover:cursor-pointer focus:outline-none"
      value={timeLimit}
      onChange={onSelectHandler}
    >
      <option value={1}>1 Second</option>
      <option value={2}>2 Second</option>
      <option value={3}>3 Second</option>
      <option value={4}>4 Second</option>
      <option value={5}>5 Second</option>
    </select>
  );
};
export default TimeLimitSelect;
