import PlayButton from 'components/shared/PlayButton';
import { usePracticeStore } from 'store/practice-store';

const PracticePlayButton = () => {
  const gameStatus = usePracticeStore((state) => state.gameStatus);
  const startGame = usePracticeStore((state) => state.startGame);
  const stopGame = usePracticeStore((state) => state.stopGame);

  const onClickHandler = () => {
    if (gameStatus === 'playing') {
      stopGame();
    } else {
      startGame();
    }
  };

  return <PlayButton gameStatus={gameStatus} onClick={onClickHandler} />;
};
export default PracticePlayButton;
