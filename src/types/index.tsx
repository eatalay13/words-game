export interface GameManager {
  startGame: () => void;
  endGame: () => void;
  isGameRunning: boolean;
  score: number;
  health: number;
  gameStatus: GameState;
  resetScore: () => void;
  incrementScore: () => void;
  decrementScore: () => void;
}

export type GameState = "start" | "playing" | "end";

export type WordLevel = "easy" | "medium" | "hard";

export interface Word {
  word: string;
  hint: string;
  level: WordLevel;
}
