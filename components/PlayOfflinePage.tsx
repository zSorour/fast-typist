import GameScores from 'components/GameScores';
import Words from 'components/Words';
import NextWordTimer from 'components/NextWordTimer';
import PageWrapper from 'components/UI/PageWrapper';
import WordInput from 'components/WordInput';
import TimeLimitSelect from 'components/TimeLimitSelect';
import ToggleGameStatusButton from 'components/ToggleGameStatusButton';
import GameOverModal from './GameOverModal';

const PlayOfflinePage = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-8 w-[40%] mx-auto bg-main bg-opacity-60 rounded-3xl p-12">
        <NextWordTimer />
        <GameScores />
        <div className="flex self-center flex-col items-center justify-center gap-3 w-[60%]">
          <Words />
          <WordInput />
        </div>
        <div className="flex self-center gap-5 w-[60%]">
          <ToggleGameStatusButton />
          <TimeLimitSelect />
        </div>
        <GameOverModal />
      </div>
    </PageWrapper>
  );
};
export default PlayOfflinePage;
