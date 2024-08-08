import { ReactNode } from "react";

interface AppBarProps {
  children: ReactNode;
}

function AppBar({ children }: AppBarProps) {
  return (
    <header className="w-full flex justify-between px-4 mt-4">
      <div className="w-9 h-9 hover:cursor-pointer bg-gamePink rounded-full flex items-center justify-center text-white font-bold text-xl border-2 border-white">
        ?
      </div>
      <div className="flex space-x-2">{children}</div>
    </header>
  );
}

export default AppBar;
