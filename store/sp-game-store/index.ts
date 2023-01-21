import create from 'zustand';
import { Socket } from 'socket.io-client';
import { SPGameStore } from './types';

export const useSPGameStore = create<SPGameStore>()((set, get) => ({
  socket: null,
  words: [],
  gameStatus: 'idle',
  currentScore: 0,
  personalTopScore: 0,
  timeLimit: 3,
  timeLeft: get()?.timeLimit | 3,
  sendInputWord: (word: string) => {
    const socket = get().socket!;
    socket.emit('wordInput', { word: word });
  },
  startGame: () => {
    const socket = get().socket!;
    socket.emit('startGame', { timeLimit: get().timeLimit });
  },
  stopGame: () => {
    const socket = get().socket!;
    socket.emit('endGame');
  },
  resetGame: () => {
    set({ gameStatus: 'idle', currentScore: 0, timeLeft: get().timeLimit });
  },
  setTimeLimit: (seconds: number) => {
    set({ timeLimit: seconds });
  },
  setSocket: (socket: Socket) => {
    set({ socket: socket });
  },
  registerEvents: () => {
    const socket = get().socket!;
    socket.on('initialWords', (payload) => {
      set({ words: payload.words, personalTopScore: payload.personalTopScore });
    });
    socket.on('timeLeft', (payload) => {
      set({ timeLeft: payload.timeLeft });
    });
    socket.on('correctWord', (payload) => {
      const newWords = [...get().words];
      newWords.shift();
      newWords.push(payload.newWord);
      set({
        words: newWords,
        currentScore: payload.currentScore,
        timeLeft: payload.timeLeft
      });
    });
    socket.on('gameStarted', (payload) => {
      set({ gameStatus: 'playing', timeLeft: payload.timeLeft });
    });
    socket.on('gameEnded', (payload) => {
      set({
        gameStatus: 'game-over',
        currentScore: payload.score,
        personalTopScore: payload.topScore
      });
    });
  }
}));
