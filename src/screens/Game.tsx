import { useState } from "react";
import AppBar from "../components/AppBar";
import Badge from "../components/Badge";
import GameBottomBar from "../components/GameBottomBar";
import View from "../components/View";
import ViewBody from "../components/ViewBody";
import WordLettersBar from "../components/WordLettersBar";

interface GameProps {
  word: string;
  endGame: (score: number) => void;
}

function Game({ word, endGame }: GameProps) {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState<string[]>([]);
  const [remainingGuesses, setRemainingGuesses] = useState<number>(6);

  const handleVibrate = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    } else {
      console.log("Vibration API not supported.");
    }
  };

  const handleGuess = (value: string) => {
    const guess = value;
    if (word.includes(guess)) {
      setGuesses([...guesses, guess]);
    } else {
      setWrongGuesses([...wrongGuesses, guess]);
      setRemainingGuesses(remainingGuesses - 1);
      handleVibrate();
    }
  };

  const isGameWon = word.split("").every((letter) => guesses.includes(letter));
  if (isGameWon) {
    endGame(remainingGuesses * 10);
  }

  if (remainingGuesses <= 0) {
    endGame(0);
  }

  return (
    <View background="red">
      <AppBar>
        <Badge number={remainingGuesses} />
        <Badge number={guesses.length} />
      </AppBar>
      <ViewBody>
        <div>
          <h2 className="text-3xl font-bold mb-4">Kelime Tahmin Et</h2>
          <div className="mb-6">
            {word.split("").map((letter, index) => (
              <span key={index} className="text-2xl mx-1">
                {guesses.includes(letter) ? letter.toUpperCase() : "_"}
              </span>
            ))}
          </div>
          <div className="mb-4">
            <p>Yanlış Tahminler: {wrongGuesses.join(", ")}</p>
            <p>Kalan Haklar: {remainingGuesses}</p>
          </div>
        </div>
        <div className="mt-8">
          <WordLettersBar word={word} onGuess={handleGuess} />
        </div>
        <div className="mt-8"></div>
        <GameBottomBar selectedIndex={1} />
      </ViewBody>
    </View>
  );
}

export default Game;
