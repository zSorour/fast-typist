import { usePracticeStore } from 'store/practice-store';

const GameScores = () => {
  const currentScore = usePracticeStore((state) => state.currentScore);
  const personalTopScore = usePracticeStore((state) => state.personalTopScore);

  return (
    <table className="text-center table-fixed w-[100%] rounded-lg overflow-hidden bg-secondary border-collapse md:w-[65%] md:mx-auto">
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
