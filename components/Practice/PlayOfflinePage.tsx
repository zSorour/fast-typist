import GameScores from 'components/shared/GameScores';
import Words from 'components/shared/Words';
import NextWordTimer from 'components/shared/NextWordTimer';
import PageWrapper from 'components/UI/PageWrapper';
import WordInput from 'components/shared/WordInput';
import TimeLimitSelect from 'components/shared/TimeLimitSelect';
import ToggleGameStatusButton from 'components/shared/ToggleGameStatusButton';
import GameOverModal from '../shared/GameOverModal';

const PlayOfflinePage = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center w-[90%] mx-auto gap-8 p-8 bg-main bg-opacity-60 rounded-3xl md:p-0 md:aspect-square md:w-[50%] 2xl:w-[35%]">
        <NextWordTimer />
        <GameScores />
        <div className="flex self-center flex-col items-center justify-center gap-3 md:w-[65%]">
          <Words />
          <WordInput />
        </div>
        <div className="flex justify-between gap-2 md:self-center md:w-[65%]">
          <ToggleGameStatusButton />
          <TimeLimitSelect />
        </div>
        <GameOverModal />
      </div>
    </PageWrapper>
  );
};
export default PlayOfflinePage;
