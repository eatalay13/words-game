import { motion } from "framer-motion";
import { AudioLinesIcon, Music, Settings, Vibrate } from "lucide-react";

function SettingsScreen() {
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
      <div className="bg-gameWhip rounded-3xl p-6 w-80 font-jungleAdventurer border-white border-4">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
            <img
              src="https://via.placeholder.com/150"
              alt="Nina"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gameWine">Emrah</h2>
            <p className="text-sm text-gray-500">@eatalay13</p>
          </div>
          <button className="ml-auto w-8 h-8 bg-gamePink text-white rounded-full flex items-center justify-center">
            <span role="img" aria-label="settings">
              <Settings size={16} />
            </span>
          </button>
        </div>
        <div className="mt-6">
          <div className="flex justify-between bg-white/50 p-3 rounded-2xl border-b-4 border-b-gray-500/10">
            <button className="w-12 h-12 bg-gamePink text-white rounded-2xl border-b-4 border-b-gameWine/30 flex items-center justify-center">
              <span role="img" aria-label="music">
                <Music size={24} />
              </span>
            </button>
            <button className="w-12 h-12 bg-gamePink text-white rounded-2xl border-b-4 border-b-gameWine/30 flex items-center justify-center">
              <span role="img" aria-label="sound">
                <AudioLinesIcon size={24} />
              </span>
            </button>
            <button className="w-12 h-12 bg-gamePink text-white rounded-2xl border-b-4 border-b-gameWine/30 flex items-center justify-center">
              <span role="img" aria-label="game">
                <Vibrate size={24} />
              </span>
            </button>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <button className="w-full bg-white/50 text-xl text-gameWine py-3 rounded-2xl border-b-4 border-b-gray-500/10">
            <span>Türkçe</span>
          </button>
          <button className="w-full bg-white/50 text-xl text-gameWine py-3 rounded-2xl border-b-4 border-b-gray-500/10">
            iletisim
          </button>
          <button className="w-full bg-white/50 text-xl text-gameWine py-3 rounded-2xl border-b-4 border-b-gray-500/10">
            Oyunu Puanla
          </button>
        </div>
        <div className="flex justify-between mt-6 text-xs text-gameWine font-sans">
          <button>Kullanım Koşulları</button>
          <button>Gizlilik Politikası</button>
        </div>
      </div>
    </motion.div>
  );
}

export default SettingsScreen;
