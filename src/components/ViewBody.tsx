import { ReactNode } from "react";

function ViewBody({ children }: { children: ReactNode }) {
  return (
    <main className="w-full p-6 flex flex-col items-center justify-around flex-grow">
      {children}
    </main>
  );
}

export default ViewBody;
