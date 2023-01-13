import PracticePage from 'components/Practice/PracticePage';
import useHasMounted from 'hooks/useHasMounted';
import { useSPGameStore } from 'store/single-player-game';
import generateRandomWords from 'random-words';

const PlayPage = () => {
  const hasMounted = useHasMounted();
  const setWords = useSPGameStore((state) => state.setWords);
  if (hasMounted) {
    setWords(generateRandomWords(3));
  }

  return <PracticePage />;
};

export default PlayPage;
