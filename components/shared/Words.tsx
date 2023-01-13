import Word from 'components/shared/Word';
import { useSPGameStore } from 'store/single-player-game';

const Words = () => {
  const words = useSPGameStore((state) => state.words);

  return (
    <div className="flex flex-col items-center bg-secondary p-4 rounded-lg overflow-hidden w-full h-28">
      {words.map((w) => (
        <Word word={w} key={w} />
      ))}
    </div>
  );
};
export default Words;
