import GameScores from 'components/Practice/GameScores';
import PageWrapper from 'components/UI/PageWrapper';
import PracticeNextWordTimer from './PracticeNextWordTimer';
import PracticeWords from './PracticeWords';
import PracticeWordInput from './PracticeWordInput';
import PracticePlayButton from './PracticePlayButton';
import PracticeTimeLimitSelect from './PracticeTimeLimitSelect';

const PracticePage = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center w-[90%] mx-auto gap-8 p-8 bg-main bg-opacity-60 rounded-3xl md:p-0 md:aspect-square md:w-[50%] 2xl:w-[35%]">
        <PracticeNextWordTimer />
        <GameScores />
        <div className="flex self-center flex-col items-center justify-center gap-3 md:w-[65%]">
          <PracticeWords />
          <PracticeWordInput />
        </div>
        <div className="flex justify-between gap-2 md:self-center md:w-[65%]">
          <PracticePlayButton />
          <PracticeTimeLimitSelect />
        </div>
        {/* Render <GameOverModal /> specific to Practice Game Mode */}
      </div>
    </PageWrapper>
  );
};
export default PracticePage;
