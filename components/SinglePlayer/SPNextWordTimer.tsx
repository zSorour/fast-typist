import NextWordTimer from 'components/shared/NextWordTimer';
import { useSPGameStore } from 'store/sp-game-store';

const SPNextWordTimer = () => {
  const timeLeft = useSPGameStore((state) => state.timeLeft);

  return <NextWordTimer timeLeft={timeLeft} />;
};
export default SPNextWordTimer;
