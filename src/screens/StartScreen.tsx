import { Save, Swords } from "lucide-react";
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
    setTimeout(() => setConfettiVisible(false), 3000); // 3 saniye sonra confetti'yi durdur
  };

  return (
    <>
      <div className="w-32 h-32 bg-gamePink rounded-full flex items-center justify-center mb-4">
        <div className="w-24 h-24 bg-gameOrange rounded-full flex items-center justify-center text-white font-bold text-2xl">
          EA
        </div>
      </div>
      <h1 className="text-4xl font-bold text-white mb-8 tracking-wider">
        MindWords
      </h1>
      <div className="flex flex-row gap-x-4">
        <MenuButton onClick={startGame} variant="play">
          <Swords className="mr-2" size={20} />
          Başla
        </MenuButton>
        <MenuButton variant="save" onClick={handleClick}>
          <Save size={20} />
        </MenuButton>
      </div>
      <div className="mt-4 flex space-x-4 text-xs">
        <span className="text-white">Kullanım Koşulları</span>
        <span className="text-white">Gizlilik Politikası</span>
      </div>
      {isConfettiVisible && <Confetti />}
    </>
  );
}

export default StartScreen;
