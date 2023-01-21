import PageWrapper from 'components/UI/PageWrapper';
import GameModeLink from './GameModeLink';

const PlayPage = () => {
  const gameModes = [
    {
      name: 'Single Player',
      to: '/play/single-player'
    },
    {
      name: 'Multiplayer',
      to: '/play/multiplayer'
    },
    {
      name: 'Practice',
      to: '/play/practice'
    }
  ];

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center w-[90%] mx-auto gap-8 p-8 bg-main bg-opacity-60 rounded-3xl md:w-[50%]">
        <h1 className="font-bold text-2xl">Choose a Game Mode</h1>
        <div className="flex items-center justify-center gap-4">
          {gameModes.map((gameMode) => (
            <GameModeLink
              key={gameMode.name}
              name={gameMode.name}
              to={gameMode.to}
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};
export default PlayPage;
