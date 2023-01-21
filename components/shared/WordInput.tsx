import { ChangeEvent, useEffect, useRef, useState } from 'react';

type Props = {
  gameStatus: 'idle' | 'playing' | 'game-over';
  targetWord: string;
  sendWordInput: (word: string) => void;
};

const WordInput = (props: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const [userInput, setUserInput] = useState<string>('');

  useEffect(() => {
    if (props.gameStatus === 'playing') {
      ref.current?.focus();
    } else {
      setUserInput('');
    }
  }, [props.gameStatus]);

  useEffect(() => {
    setUserInput('');
  }, [props.targetWord]);

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    if (e.target.value.length === props.targetWord.length) {
      props.sendWordInput(e.target.value);
    }
  };

  return (
    <input
      className="form-input bg-emerald-600 font-bold text-2xl p-4 text-center rounded-lg h-10 w-full focus:outline-none disabled:bg-gray-800 disabled:cursor-not-allowed"
      type="text"
      value={userInput}
      onChange={onInputChangeHandler}
      disabled={props.gameStatus !== 'playing'}
      ref={ref}
      autoFocus
    />
  );
};

export default WordInput;
