import React from "react";

interface StartScreenProps {
  startGame: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ startGame }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Kelime Tahmin Oyunu</h1>
      <p className="text-lg mb-6">
        Rastgele seçilen bir kelimeyi tahmin etmeye çalışın!
      </p>
      <button
        onClick={startGame}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Oyuna Başla
      </button>
    </div>
  );
};

export default StartScreen;
