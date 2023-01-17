import WordInput from 'components/shared/WordInput';
import { usePracticeStore } from 'store/practice-store';

const PracticeWordInput = () => {
  const gameStatus = usePracticeStore((state) => state.gameStatus);
  const validateWordCorrectness = usePracticeStore(
    (state) => state.validateWordCorrectness
  );

  return (
    <WordInput
      gameStatus={gameStatus}
      isCorrectWord={validateWordCorrectness}
    />
  );
};
export default PracticeWordInput;
