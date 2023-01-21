import { Socket } from 'socket.io-client';

// Server Sent Events
export type SPGameServerToClientEvents = {
  error: (payload: ErrorPayload) => void;
  initialWords: (payload: InitialWordsPayload) => void;
  gameStarted: (payload: GameStartedPayload) => void;
  timeLeft: (payload: TimeLeftPayload) => void;
  correctWord: (payload: CorrectWordPayload) => void;
  gameEnded: (payload: GameEndedPayload) => void;
};

// Server Sent Event Payloads
export type ErrorPayload = { message: string };
export type InitialWordsPayload = { words: string[]; personalTopScore: number };
export type GameStartedPayload = { timeLeft: number };
export type TimeLeftPayload = { timeLeft: number };
export type CorrectWordPayload = {
  currentScore: number;
  newWord: string;
  timeLeft: number;
};
export type GameEndedPayload = {
  score: number;
  topScore: number;
  newWords: string[];
};

// Client Sent Events
export type SPGameClientToServerEvents = {
  startGame: (payload: StartGamePayload) => void;
  wordInput: (payload: WordInputPayload) => void;
  endGame: () => void;
};

// Client Sent Event Payloads
export type StartGamePayload = {
  timeLimit: number;
};
export type WordInputPayload = { word: string };

export interface SPGameStore {
  words: string[];
  gameStatus: 'playing' | 'idle' | 'game-over';
  currentScore: number;
  personalTopScore: number;
  timeLimit: number;
  timeLeft: number;
  socket: Socket<SPGameServerToClientEvents, SPGameClientToServerEvents> | null;

  sendInputWord: (word: string) => void;
  startGame: () => void;
  stopGame: () => void;
  resetGame: () => void;
  setTimeLimit: (seconds: number) => void;
  registerEvents: () => void;
  setSocket: (socket: Socket) => void;
}
