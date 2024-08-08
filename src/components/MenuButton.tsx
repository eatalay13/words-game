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
        "py-2 rounded-full border-b-4 mt-4 flex flex-row items-center justify-center text-2xl md:text-4xl font-luckiestGuy ring ring-white border-b-gray-600/40",
        props.variant === "save" && "bg-gameCyan text-white px-4",
        props.variant === "play" && "bg-gameGreen text-white px-16"
      )}
    >
      {props.children}
    </button>
  );
}

export default MenuButton;
