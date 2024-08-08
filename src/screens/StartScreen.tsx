import { Save } from "lucide-react";
import { useState } from "react";
import Confetti from "react-confetti";
import MenuButton from "../components/MenuButton";

interface StartScreenProps {
  startGame: () => void;
}

function StartScreen({ startGame }: StartScreenProps) {
  const [isConfettiVisible, setConfettiVisible] = useState(false);

  const handleClick = () => {
    setConfettiVisible(true);
  };

  return (
    <>
      <div className="w-32 h-32 bg-gamePink rounded-full md:flex items-center justify-center mb-4 hidden">
        <div className="w-24 h-24 font-luckiestGuy bg-gameOrange rounded-full flex items-center justify-center text-white font-bold text-2xl">
          EA
        </div>
      </div>
      <h1 className="text-4xl font-luckiestGuy text-white mb-8 tracking-wider">
        MindWords
      </h1>
      <div className="flex flex-row gap-x-4">
        <MenuButton onClick={startGame} variant="play">
          oyna
        </MenuButton>
        <MenuButton variant="save" onClick={handleClick}>
          <Save size={24} strokeWidth={2.5} />
        </MenuButton>
      </div>
      <div className="mt-4 flex space-x-4 text-xs">
        <span className="text-white">Kullanım Koşulları</span>
        <span className="text-white">Gizlilik Politikası</span>
      </div>
      <Confetti
        run={isConfettiVisible}
        recycle={false}
        numberOfPieces={900}
        tweenDuration={3000}
        onConfettiComplete={(confetti) => {
          confetti?.reset();
          setConfettiVisible(false);
        }}
      />
    </>
  );
}

export default StartScreen;
