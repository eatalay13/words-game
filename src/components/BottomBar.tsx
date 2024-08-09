import { Home, LucideProps, Medal, Settings } from "lucide-react";
import { useState } from "react";
import { ButtomBarButton } from "./ButtomBarButton";

interface BottomBarProps {
  selectedIndex: number;
  onChange?: (index: number) => void;
}

function BottomBar({ selectedIndex, onChange }: BottomBarProps) {
  const [selected, setSelected] = useState(selectedIndex);

  function handleChanged(index: number) {
    setSelected(index);
    if (onChange) onChange(index);
  }

  return (
    <footer className="w-full bg-gameWhip rounded-t-3xl py-4 flex justify-evenly items-center">
      <ButtomBarButton
        active={selected === 0}
        onClick={() => handleChanged(0)}
        icon={Medal}
        label="Liderlik"
      ></ButtomBarButton>
      <ButtomBarButton
        active={selected === 1}
        onClick={() => handleChanged(1)}
        icon={Home}
        label="Anasayfa"
      ></ButtomBarButton>
      <ButtomBarButton
        active={selected === 2}
        onClick={() => handleChanged(2)}
        icon={Settings}
        label="Ayarlar"
      />
    </footer>
  );
}

export default BottomBar;

export interface ButtomBarButtonProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  active?: boolean;
  label?: string;
  onClick?: () => void;
}
