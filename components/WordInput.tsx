import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useSPGameStore } from 'store/single-player-game';

const WordInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [userInput, setUserInput] = useState<string>('');

  const validateWordCorrectness = useSPGameStore(
    (state) => state.validateWordCorrectness
  );
  const gameStatus = useSPGameStore((state) => state.gameStatus);

  useEffect(() => {
    if (gameStatus === 'playing') {
      ref.current?.focus();
    } else {
      setUserInput('');
    }
  }, [gameStatus]);

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    const isCorrectWord = validateWordCorrectness(e.target.value);
    if (isCorrectWord) {
      setUserInput('');
    }
  };

  return (
    <input
      className="form-input bg-emerald-600 font-bold text-2xl p-4 text-center rounded-lg h-10 w-full focus:outline-none disabled:bg-gray-800 disabled:cursor-not-allowed"
      type="text"
      value={userInput}
      onChange={onInputChangeHandler}
      disabled={gameStatus !== 'playing'}
      ref={ref}
      autoFocus
    />
  );
};

export default WordInput;
