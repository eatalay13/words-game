import clsx from "clsx";
import { ReactNode } from "react";

interface MenuButtonProps {
  variant: "play" | "save";
  children: ReactNode;
  onClick?: () => void;
}

function MenuButton(props: MenuButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        "px-4 uppercase py-2 rounded-full border-2 border-white mt-4 font-bold flex flex-row items-center justify-center text-xs md:text-lg",
        props.variant === "save" && "bg-gameCyan text-white hover:bg-blue-700",
        props.variant === "play" &&
          "bg-gameGreen text-white hover:bg-green-700 px-14"
      )}
    >
      {props.children}
    </button>
  );
}

export default MenuButton;
