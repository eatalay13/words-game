import React, { useState } from "react";

interface GameProps {
  word: string;
  endGame: (score: number) => void;
}

const Game: React.FC<GameProps> = ({ word, endGame }) => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState<string[]>([]);
  const [remainingGuesses, setRemainingGuesses] = useState<number>(6);
  const [currentGuess, setCurrentGuess] = useState<string>("");

  const handleGuess = () => {
    const guess = currentGuess.toUpperCase();
    if (word.includes(guess)) {
      setGuesses([...guesses, guess]);
    } else {
      setWrongGuesses([...wrongGuesses, guess]);
      setRemainingGuesses(remainingGuesses - 1);
    }
    setCurrentGuess("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentGuess(e.target.value);
  };

  const isGameWon = word.split("").every((letter) => guesses.includes(letter));
  if (isGameWon) {
    endGame(remainingGuesses * 10);
  }

  if (remainingGuesses <= 0) {
    endGame(0);
  }

  return (
    <div className="min-h-screen w-full bg-indigo-700">
      <div className="flex flex-grow justify-center text-center">
        <h2 className="text-3xl font-bold mb-4">Kelime Tahmin Et</h2>
        <div className="mb-6">
          {word.split("").map((letter, index) => (
            <span key={index} className="text-2xl mx-1">
              {guesses.includes(letter) ? letter : "_"}
            </span>
          ))}
        </div>
        <div className="mb-4">
          <p>Yanlış Tahminler: {wrongGuesses.join(", ")}</p>
          <p>Kalan Haklar: {remainingGuesses}</p>
        </div>
        <input
          type="text"
          value={currentGuess}
          onChange={handleChange}
          maxLength={1}
          className="border rounded px-2 py-1 text-center"
        />
        <button
          onClick={handleGuess}
          className="bg-green-500 text-white px-4 py-2 rounded ml-2"
        >
          Tahmin Et
        </button>
      </div>
    </div>
  );
};

export default Game;
