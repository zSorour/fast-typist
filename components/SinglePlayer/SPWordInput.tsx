import WordInput from 'components/shared/WordInput';
import { useSPGameStore } from 'store/sp-game-store';

const SPWordInput = () => {
  const gameStatus = useSPGameStore((state) => state.gameStatus);
  const sendInputWord = useSPGameStore((state) => state.sendInputWord);
  const targetWord = useSPGameStore((state) => state.words[0]);

  return (
    <WordInput
      gameStatus={gameStatus}
      sendWordInput={sendInputWord}
      targetWord={targetWord}
    />
  );
};
export default SPWordInput;
