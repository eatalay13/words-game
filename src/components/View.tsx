import { ReactNode } from "react";

function View({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gameYellow h-screen w-full flex flex-col items-center relative font-sans">
      {children}
    </div>
  );
}

export default View;
