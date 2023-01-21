import GameOverModal from 'components/shared/GameOverModal';
import useHasMounted from 'hooks/useHasMounted';
import { usePracticeStore } from 'store/practice-store';

const PracticeGameScores = () => {
  const currentScore = usePracticeStore((state) => state.currentScore);
  const personalTopScore = usePracticeStore((state) => state.personalTopScore);
  const gameStatus = usePracticeStore((state) => state.gameStatus);
  const resetGame = usePracticeStore((state) => state.resetGame);

  const hasMounted = useHasMounted();

  return (
    <>
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
            {hasMounted && (
              <td className="py-5 text-3xl">{personalTopScore}</td>
            )}
          </tr>
        </tbody>
      </table>
      <GameOverModal
        gameStatus={gameStatus}
        onClose={resetGame}
        score={currentScore}
      />
    </>
  );
};
export default PracticeGameScores;
