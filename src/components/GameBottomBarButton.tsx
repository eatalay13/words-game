import clsx from "clsx";
import useSound from "use-sound";

import { LucideProps } from "lucide-react";
import clickSound from "/sounds/classic-click.wav";

interface BottomBarButtonProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  active?: boolean;
  variant?: "bomb" | "addTime" | "restart" | "hint";
  count?: number;
  onClick?: () => void;
}

export function GameBottomBarButton(props: BottomBarButtonProps) {
  const [play] = useSound(clickSound);

  function handleClick() {
    play();
    if (props.onClick) props.onClick();
  }

  return (
    <div className="relative">
      <div
        className={clsx(
          "rounded-full w-16 h-16 flex items-center justify-center hover:cursor-pointer transmition-all duration-300 border-b-4 ring ring-white",
          props.variant === "bomb" && "bg-gameRed border-b-gameWine",
          props.variant === "addTime" && "bg-gameCyan border-b-teal-600",
          props.variant === "restart" && "bg-gameYellow border-b-yellow-600",
          props.variant === "hint" && "bg-gameGreen border-b-green-600"
        )}
        onClick={handleClick}
      >
        <props.icon
          size={32}
          strokeWidth={2}
          color="white"
          className="transmition-all duration-300"
        />
        <div className="absolute right-0 -bottom-3">
          {props.count && (
            <span className="text-3xl text-white font-jungleAdventurer bg-black bg-opacity-20 rounded-full px-2 p-1">
              {props.count}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
