import Words from 'components/shared/Words';
import { usePracticeStore } from 'store/practice-store';

const PracticeWords = () => {
  const words = usePracticeStore((state) => state.words);

  return <Words words={words} />;
};
export default PracticeWords;
