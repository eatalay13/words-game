import { useState } from "react";
import AppBar from "./components/AppBar";
import Badge from "./components/Badge";
import BottomBar from "./components/BottomBar";
import View from "./components/View";
import words from "./data/words";
import EndScreen from "./screens/EndScreen";
import Game from "./screens/Game";
import SettingsScreen from "./screens/Settings";
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
    <View>
      <AppBar>
        <Badge number={30} />
        <Badge number={456} />
      </AppBar>
      <main className="flex flex-col items-center justify-center flex-grow">
        {gameState === "start" && <SettingsScreen />}
        {gameState === "playing" && <Game word={word} endGame={endGame} />}
        {gameState === "end" && (
          <EndScreen score={score} startGame={startGame} />
        )}
      </main>
      <BottomBar />
    </View>
  );
}

export default App;
