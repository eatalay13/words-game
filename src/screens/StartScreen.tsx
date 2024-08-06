import { CircleX, Settings, Sword, Swords } from "lucide-react";
import React from "react";
import MenuButton from "../components/MenuButton";

interface StartScreenProps {
  startGame: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ startGame }) => {
  return (
    <div className="text-center bg-[url('/start_bg.jpg')] bg-cover h-screen w-full">
      <div className="backdrop-blur-md h-full w-full flex items-center justify-center">
        <div>
          <h2 className="text-md lg:text-3xl font-bold mb-4 text-white bg-green-800 p-3 rounded-xl shadow-md shadow-green-600">
            Kelime Tahmin Oyunu
          </h2>
          <div className="flex flex-col justify-center">
            <MenuButton variant="continue">
              <Sword className="mr-2" size={20} />
              Devam Et
            </MenuButton>
            <MenuButton onClick={startGame} variant="play">
              <Swords className="mr-2" size={20} />
              Yeni Oyun
            </MenuButton>
            <MenuButton variant="settings">
              <Settings className="mr-2" size={20} />
              Ayarlar
            </MenuButton>
            <MenuButton
              variant="exit"
              onClick={() => {
                window.location.reload();
              }}
            >
              <CircleX className="mr-2" size={20} />
              Çıkış
            </MenuButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
