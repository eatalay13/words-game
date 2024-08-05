export interface GameManager {
  startGame: () => void;
  endGame: () => void;
  isGameRunning: boolean;
  score: number;
  health: number;
  resetScore: () => void;
  incrementScore: () => void;
  decrementScore: () => void;
}
