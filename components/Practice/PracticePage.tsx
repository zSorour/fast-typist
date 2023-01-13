import GameScores from 'components/Practice/GameScores';
import Words from 'components/shared/Words';
import NextWordTimer from 'components/shared/NextWordTimer';
import PageWrapper from 'components/UI/PageWrapper';
import WordInput from 'components/shared/WordInput';
import TimeLimitSelect from 'components/shared/TimeLimitSelect';
import ToggleGameStatusButton from 'components/shared/ToggleGameStatusButton';
import GameOverModal from '../shared/GameOverModal';

const PracticePage = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center w-[90%] mx-auto gap-8 p-8 bg-main bg-opacity-60 rounded-3xl md:p-0 md:aspect-square md:w-[50%] 2xl:w-[35%]">
        {/* Render <NextWordTimer /> specific to Practice Game Mode */}
        <GameScores />
        <div className="flex self-center flex-col items-center justify-center gap-3 md:w-[65%]">
          {/* Render <Words /> specific to Practice Game Mode */}
          {/* Render <WordInput /> specific to Practice Game Mode */}
        </div>
        <div className="flex justify-between gap-2 md:self-center md:w-[65%]">
          {/* Render <ToggleGameStatusButton /> specific to Practice Game Mode */}
          {/* Render <TimeLimitSelect /> specific to Practice Game Mode */}
        </div>
        {/* Render <GameOverModal /> specific to Practice Game Mode */}
      </div>
    </PageWrapper>
  );
};
export default PracticePage;
