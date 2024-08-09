import { useState } from "react";
import AppBar from "../components/AppBar";
import Badge from "../components/Badge";
import GameBottomBar from "../components/GameBottomBar";
import GameInfoBar from "../components/GameInfoBar";
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
        <GameInfoBar
          remainingGuesses={remainingGuesses}
          score={guesses.length}
        />
        <div className="min-w-full flex flex-col justify-center items-center bg-white/10 rounded-3xl p-6">
          <h2 className="text-3xl mb-6 font-jungleAdventurer text-gameWhip">
            Kelime
          </h2>
          <div className="flex flex-wrap">
            {word.split("").map((letter, index) => (
              <span
                key={index}
                className="text-6xl mx-1 font-jungleAdventurer text-gameWhip"
              >
                {guesses.includes(letter) ? letter.toUpperCase() : "_"}
              </span>
            ))}
          </div>
        </div>
        <WordLettersBar word={word} onGuess={handleGuess} />
        <GameBottomBar selectedIndex={1} />
      </ViewBody>
    </View>
  );
}

export default Game;
