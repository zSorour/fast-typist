import PracticePage from 'components/Practice/PracticePage';
import useHasMounted from 'hooks/useHasMounted';
import { usePracticeStore } from 'store/practice-store';
import generateRandomWords from 'random-words';
import { useEffect } from 'react';

const Practice = () => {
  const setWords = usePracticeStore((state) => state.setWords);

  useEffect(() => {
    setWords(generateRandomWords(3));
  }, [setWords]);

  return <PracticePage />;
};

export default Practice;
