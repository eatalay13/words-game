interface GameInfoBarProps {
  remainingGuesses: number;
  score: number;
}

function GameInfoBar({ remainingGuesses, score }: GameInfoBarProps) {
  return (
    <div className="min-w-full bg-gameWhip rounded-3xl py-4 px-6 gap-4 flex justify-around items-center border-b-4 border-b-orange-200">
      <div className="flex flex-col items-center">
        <span className="text-gameGreen text-2xl font-jungleAdventurer">
          Hak
        </span>
        <span className="text-gameGreen text-4xl font-jungleAdventurer">
          {remainingGuesses}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-gameGreen text-2xl font-jungleAdventurer">
          Süre
        </span>
        <span className="text-gameGreen text-4xl font-jungleAdventurer">
          59
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-gameYellow text-2xl font-jungleAdventurer">
          Puan
        </span>
        <span className="text-gameYellow text-4xl font-jungleAdventurer">
          {score}
        </span>
      </div>
    </div>
  );
}

export default GameInfoBar;
