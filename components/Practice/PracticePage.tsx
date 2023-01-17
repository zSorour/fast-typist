import PracticeGameScores from 'components/Practice/PracticeGameScores';
import PageWrapper from 'components/UI/PageWrapper';
import PracticeNextWordTimer from './PracticeNextWordTimer';
import PracticeWords from './PracticeWords';
import PracticeWordInput from './PracticeWordInput';
import PracticeGameSettings from './PracticeGameSettings';
import GameplayContainer from 'components/shared/GameplayContainer';

const PracticePage = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center w-[90%] mx-auto gap-8 p-8 bg-main bg-opacity-60 rounded-3xl md:p-0 md:aspect-square md:w-[50%] 2xl:w-[35%]">
        <PracticeNextWordTimer />
        <PracticeGameScores />
        <GameplayContainer>
          <PracticeWords />
          <PracticeWordInput />
        </GameplayContainer>
        <PracticeGameSettings />
      </div>
    </PageWrapper>
  );
};
export default PracticePage;
