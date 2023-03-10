import { ChangeEvent } from 'react';

type Props = {
  gameStatus: 'idle' | 'playing' | 'game-over';
  timeLimit: number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const TimeLimitSelect = (props: Props) => {
  return (
    <select
      className="form-select font-bold bg-secondary py-2 px-3 rounded-lg w-full hover:cursor-pointer disabled:cursor-not-allowed"
      value={props.timeLimit}
      onChange={props.onChange}
      disabled={props.gameStatus !== 'idle'}
    >
      <option value={1}>1 Second</option>
      <option value={2}>2 Seconds</option>
      <option value={3}>3 Seconds</option>
      <option value={4}>4 Seconds</option>
      <option value={5}>5 Seconds</option>
      <option value={7}>7 Seconds</option>
      <option value={10}>10 Seconds</option>
    </select>
  );
};
export default TimeLimitSelect;
