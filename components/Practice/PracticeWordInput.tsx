import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { usePracticeStore } from 'store/practice-store';

const PracticeWordInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [userInput, setUserInput] = useState<string>('');

  const gameStatus = usePracticeStore((state) => state.gameStatus);
  const targetWord = usePracticeStore((state) => state.words[0]);
  const isCorrectWord = usePracticeStore(
    (state) => state.validateWordCorrectness
  );

  useEffect(() => {
    if (gameStatus === 'playing') {
      ref.current?.focus();
    } else {
      setUserInput('');
    }
  }, [gameStatus]);

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    if (e.target.value.length === targetWord.length) {
      if (isCorrectWord(e.target.value)) {
        setUserInput('');
      }
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

export default PracticeWordInput;
