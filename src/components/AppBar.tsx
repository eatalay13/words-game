import { ReactNode } from "react";

interface AppBarProps {
  children: ReactNode;
}

function AppBar({ children }: AppBarProps) {
  return (
    <header className="text-white p-4 sticky top-0 z-10 flex backdrop-blur-sm items-center">
      {children}
    </header>
  );
}

export default AppBar;
