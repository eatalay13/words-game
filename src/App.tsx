import { useState } from "react";
import words from "./data/words";
import EndScreen from "./screens/EndScreen";
import Game from "./screens/Game";
import StartScreen from "./screens/StartScreen";
import "./styles/App.css";

type GameState = "start" | "playing" | "end";

function App() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [word, setWord] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  const startGame = () => {
    setWord(words[Math.floor(Math.random() * words.length)].word);
    setGameState("playing");
  };

  const endGame = (finalScore: number) => {
    setScore(finalScore);
    setGameState("end");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {gameState === "start" && <StartScreen startGame={startGame} />}
      {gameState === "playing" && <Game word={word} endGame={endGame} />}
      {gameState === "end" && <EndScreen score={score} startGame={startGame} />}
    </div>
  );
}

export default App;
