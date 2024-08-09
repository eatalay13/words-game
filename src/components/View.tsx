import clsx from "clsx";
import { ReactNode } from "react";

interface ViewProps {
  children: ReactNode;
  background?: "yellow" | "red";
}

function View(props: ViewProps) {
  return (
    <div
      className={clsx(
        "h-screen w-full flex flex-col items-center relative font-sans",
        props.background === "yellow" && "bg-gameYellow",
        props.background === "red" && "bg-gameWine"
      )}
    >
      {props.children}
    </div>
  );
}

export default View;
