import clsx from "clsx";
import { motion } from "framer-motion";

interface WordLettersBarProps {
  word: string;
  onGuess: (letter: string) => void;
}

function WordLettersBar({ word, onGuess }: WordLettersBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full bg-white/10 rounded-3xl p-4">
      {word.split("").map((letter, index) => (
        <motion.button
          whileHover={{ scale: 1.1 }}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.1 * index }}
          key={index}
          onClick={() => {
            onGuess(letter);
          }}
          className={clsx(
            "rounded-full bg-gameYellow text-gameWine text-xl px-4 py-2 font-jungleAdventurer border-b-4 border-b-yellow-600 ring ring-white"
          )}
        >
          {letter.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );
}

export default WordLettersBar;
