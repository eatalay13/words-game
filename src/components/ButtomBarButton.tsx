import clsx from "clsx";
import useSound from "use-sound";
import { ButtomBarButtonProps } from "./BottomBar";

import clickSound from "/sounds/classic-click.wav";

export function ButtomBarButton(props: ButtomBarButtonProps) {
  const [play] = useSound(clickSound);

  function handleClick() {
    play();
    if (props.onClick) props.onClick();
  }

  return (
    <div className="flex flex-col items-center text-center pb-2">
      <div
        className={clsx(
          "rounded-3xl flex items-center justify-center hover:cursor-pointer transmition-all duration-300 border-b-4",
          props.active
            ? "bg-gamePink w-20 h-20 -mt-20 border-b-gameRed/50"
            : "w-16 h-16 bg-gameOrange border-b-orange-800/40"
        )}
        onClick={handleClick}
      >
        <props.icon
          size={props.active ? 40 : 32}
          strokeWidth={props.active ? 2.5 : 2}
          color="white"
          className="transmition-all duration-300"
        />
      </div>
      <span
        className={clsx(
          "text-gameWine transmition-all duration-300 font-jungleAdventurer",
          props.active ? "opacity-100" : "opacity-0"
        )}
      >
        {props.label}
      </span>
    </div>
  );
}
