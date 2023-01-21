import Words from 'components/shared/Words';
import { useSPGameStore } from 'store/sp-game-store';

const SPWords = () => {
  const words = useSPGameStore((state) => state.words);

  return <Words words={words} />;
};
export default SPWords;
