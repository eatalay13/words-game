import { useState } from "react";
import AppBar from "./components/AppBar";
import Badge from "./components/Badge";
import BottomBar from "./components/BottomBar";
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
    <div className="bg-gameYellow text-white flex flex-col font-sans min-h-screen antialiased leading-normal tracking-normal overflow-x-hidden">
      <AppBar>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <Badge number={30} />
          <Badge number={456} />
        </div>
      </AppBar>
      <main className="flex-grow">
        <div className="flex items-center justify-center h-full">
          {gameState === "start" && <StartScreen startGame={startGame} />}
          {gameState === "playing" && <Game word={word} endGame={endGame} />}
          {gameState === "end" && (
            <EndScreen score={score} startGame={startGame} />
          )}
        </div>
      </main>
      <BottomBar />
    </div>
  );
}

export default App;
