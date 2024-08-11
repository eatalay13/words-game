import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { Save } from "lucide-react";
import MenuButton from "../components/MenuButton";

interface StartScreenProps {
  startGame: () => void;
}

function StartScreen({ startGame }: StartScreenProps) {
  function handleSave() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-between"
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 30, opacity: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
      }}
    >
      <h1 className="text-4xl font-jungleAdventurer text-white mb-8 tracking-wider">
        MindWords
      </h1>
      <div className="flex flex-row gap-x-4">
        <MenuButton onClick={startGame} variant="play">
          oyna
        </MenuButton>
        <MenuButton variant="save" onClick={handleSave}>
          <Save size={24} strokeWidth={2.5} />
        </MenuButton>
      </div>
      <div className="mt-4 flex space-x-4 text-xs">
        <span className="text-white">Kullanım Koşulları</span>
        <span className="text-white">Gizlilik Politikası</span>
      </div>
    </motion.div>
  );
}

export default StartScreen;
