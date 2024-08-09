import { ReactNode } from "react";

function ViewBody({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-center flex-grow">
      {children}
    </main>
  );
}

export default ViewBody;
