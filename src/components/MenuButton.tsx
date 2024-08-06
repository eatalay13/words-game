import clsx from "clsx";
import { ReactNode } from "react";

interface MenuButtonProps {
  variant: "play" | "continue" | "settings" | "exit";
  children: ReactNode;
  onClick?: () => void;
}

function MenuButton(props: MenuButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        "px-4 py-2 rounded mt-4 font-bold flex flex-row items-center justify-center",
        props.variant === "settings" &&
          "bg-blue-500 text-white hover:bg-blue-700",
        props.variant === "play" &&
          "bg-green-500 text-white hover:bg-green-700",
        props.variant === "exit" && "bg-red-500 text-white hover:bg-red-700",
        props.variant === "continue" &&
          "bg-yellow-500 text-white hover:bg-yellow-600"
      )}
    >
      {props.children}
    </button>
  );
}

export default MenuButton;
