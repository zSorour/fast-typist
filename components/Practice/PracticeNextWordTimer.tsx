import NextWordTimer from 'components/shared/NextWordTimer';
import { usePracticeStore } from 'store/practice-store';

const PracticeNextWordTimer = () => {
  const timeLeft = usePracticeStore((state) => state.timeLeft);

  return <NextWordTimer timeLeft={timeLeft} />;
};
export default PracticeNextWordTimer;
