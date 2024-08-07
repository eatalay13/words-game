import { Home, Medal, Settings } from "lucide-react";

function BottomBar() {
  return (
    <footer className="w-full bg-gameWhip rounded-t-3xl py-4 px-8 flex justify-evenly items-center">
      <div className="w-12 h-12 bg-gameOrange rounded-2xl flex items-center justify-center hover:cursor-pointer">
        <Medal size={24} color="white" />
      </div>
      <div className="w-16 h-16 bg-gamePink rounded-2xl flex items-center justify-center -mt-20 hover:cursor-pointer">
        <Home size={32} color="white" strokeWidth={2.5} />
      </div>
      <div className="w-12 h-12 bg-gameOrange rounded-2xl flex items-center justify-center hover:cursor-pointer">
        <Settings size={24} color="white" />
      </div>
    </footer>
  );
}

export default BottomBar;
