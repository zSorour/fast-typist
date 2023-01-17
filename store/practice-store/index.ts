import create from 'zustand';
import { PracticeStore } from 'store/practice-store/types';
import generateRandomWords from 'random-words';

let timer: NodeJS.Timer;

export const usePracticeStore = create<PracticeStore>()((set, get) => ({
  words: [],
  gameStatus: 'idle',
  currentScore: 0,
  personalTopScore: 0,
  timeLimit: 3,
  timeLeft: get()?.timeLimit | 3,
  validateWordCorrectness: (word: string) => {
    if (word.toLowerCase() === get().words[0]) {
      resetTimer();
      incrementCurrentScore();
      generateNewWord();
      return true;
    }
    return false;
  },
  startGame: () => {
    set({ gameStatus: 'playing' });
    invokeTimer();
  },
  stopGame: () => {
    clearInterval(timer);
    set({
      gameStatus: 'game-over',
      currentScore: 0,
      timeLeft: get().timeLimit,
      words: generateRandomWords(3)
    });
  },
  resetGame: () => {
    set({
      gameStatus: 'idle'
    });
  },
  setTimeLimit: (seconds) => {
    set({ timeLimit: seconds, timeLeft: seconds });
  },
  setWords: (words) => {
    set({ words });
  }
}));

const resetTimer = () => {
  clearInterval(timer);
  invokeTimer();
};

const invokeTimer = () => {
  timer = setInterval(() => {
    const state = usePracticeStore.getState();
    if (state.gameStatus === 'playing' && state.timeLeft > 1) {
      usePracticeStore.setState({ timeLeft: state.timeLeft - 1 });
    } else {
      clearInterval(timer);
      state.stopGame();
    }
  }, 1000);
};

const incrementCurrentScore = () =>
  usePracticeStore.setState((state) => {
    const newScore = state.currentScore + 1;
    if (newScore > state.personalTopScore) {
      return {
        currentScore: newScore,
        timeLeft: state.timeLimit,
        personalTopScore: newScore
      };
    } else {
      return { currentScore: newScore, timeLeft: state.timeLimit };
    }
  });

const generateNewWord = () =>
  usePracticeStore.setState((state) => {
    const newWords = state.words.slice(1);
    newWords.push(generateRandomWords(1)[0]);
    return { words: newWords };
  });
