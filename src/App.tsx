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
    <div className="bg-gameYellow h-screen w-full flex flex-col items-center relative font-sans">
      <AppBar>
        <Badge number={30} />
        <Badge number={456} />
      </AppBar>
      <main className="flex flex-col items-center justify-center flex-grow">
        {gameState === "start" && <StartScreen startGame={startGame} />}
        {gameState === "playing" && <Game word={word} endGame={endGame} />}
        {gameState === "end" && (
          <EndScreen score={score} startGame={startGame} />
        )}
      </main>
      <BottomBar />
    </div>
  );
}

export default App;
