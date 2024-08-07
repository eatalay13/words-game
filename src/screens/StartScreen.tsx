import { Save, Swords } from "lucide-react";
import React from "react";
import MenuButton from "../components/MenuButton";

interface StartScreenProps {
  startGame: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ startGame }) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div>
          <h2 className="w-full text-xl md:text-3xl font-bold mb-4 uppercase text-white stroke-gameWine">
            MindWords
          </h2>
          <div className="flex flex-row gap-x-2 justify-center">
            <MenuButton onClick={startGame} variant="play">
              <Swords className="mr-2" size={20} />
              Başla
            </MenuButton>
            <MenuButton variant="save">
              <Save size={20} />
            </MenuButton>
          </div>
          <div className="flex flex-row gap-x-2 justify-center mt-6">
            <p className="text-xs lg:text-sm text-white">
              Oyunu oynarken klavyenizdeki harfleri kullanarak kelime tahmin
              edin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
