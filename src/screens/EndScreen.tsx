import React from "react";

interface EndScreenProps {
  score: number;
  startGame: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ score, startGame }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Oyun Bitti!</h2>
      <p className="text-lg mb-4">Toplam Puan: {score}</p>
      <button
        onClick={startGame}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Tekrar Oyna
      </button>
    </div>
  );
};

export default EndScreen;
