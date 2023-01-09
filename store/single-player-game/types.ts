export interface SPGameStore {
  words: string[];
  gameStatus: 'playing' | 'idle' | 'game-over';
  currentScore: number;
  personalTopScore: number;
  timeLimit: number;
  timeLeft: number;

  validateWordCorrectness: (word: string) => boolean;
  startGame: () => void;
  stopGame: () => void;
  resetGame: () => void;
  setTimeLimit: (seconds: number) => void;
  setWords: (words: string[]) => void;
}
