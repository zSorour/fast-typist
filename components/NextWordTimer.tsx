import { useSPGameStore } from 'store/single-player-game';

const NextWordTimer = () => {
  const timeLeft = useSPGameStore((state) => state.timeLeft);

  return (
    <div className="flex flex-col items-center font-bold md:w-[65%] md:mx-auto">
      <span className="text-2xl">Seconds Remaining</span>
      <span className="text-4xl">{timeLeft}</span>
    </div>
  );
};

export default NextWordTimer;
