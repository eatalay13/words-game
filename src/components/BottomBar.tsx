import clsx from "clsx";
import { Home, LucideProps, Medal, Settings } from "lucide-react";
import { useState } from "react";

function BottomBar() {
  const [selected, setSelected] = useState(1);

  return (
    <footer className="w-full bg-gameWhip rounded-t-3xl py-4 flex justify-evenly items-center">
      <ButtomBarButton
        active={selected === 0}
        onClick={() => setSelected(0)}
        icon={Medal}
        label="Liderlik"
      ></ButtomBarButton>
      <ButtomBarButton
        active={selected === 1}
        onClick={() => setSelected(1)}
        icon={Home}
        label="Anasayfa"
      ></ButtomBarButton>
      <ButtomBarButton
        active={selected === 2}
        onClick={() => setSelected(2)}
        icon={Settings}
        label="Ayarlar"
      />
    </footer>
  );
}

export default BottomBar;

interface ButtomBarButtonProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  active?: boolean;
  label?: string;
  onClick?: () => void;
}

function ButtomBarButton(props: ButtomBarButtonProps) {
  return (
    <div className="flex flex-col items-center text-center pb-2">
      <div
        className={clsx(
          "rounded-3xl flex items-center justify-center hover:cursor-pointer transmition-all duration-300 border-b-4",
          props.active
            ? "bg-gamePink w-20 h-20 -mt-20 border-b-gameRed/50"
            : "w-16 h-16 bg-gameOrange border-b-orange-800/40"
        )}
        onClick={props.onClick}
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
