import { useSPGameStore } from 'store/single-player-game';

const GameScores = () => {
  const currentScore = useSPGameStore((state) => state.currentScore);
  const personalTopScore = useSPGameStore((state) => state.personalTopScore);

  return (
    <table className="text-center table-fixed w-[100%] rounded-lg overflow-hidden bg-secondary border-collapse">
      <thead>
        <tr className="bg-emerald-600">
          <th className="py-3">Current</th>
          <th className="py-3">Top</th>
        </tr>
      </thead>
      <tbody className="font-bold">
        <tr>
          <td className="py-5 text-3xl">{currentScore}</td>
          <td className="py-5 text-3xl">{personalTopScore}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default GameScores;
