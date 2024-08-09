import { Home, Medal, Settings } from "lucide-react";
import { useState } from "react";
import { MenuBottomBarButton } from "./MenuBottomBarButton";

interface BottomBarProps {
  selectedIndex: number;
  onChange?: (index: number) => void;
}

function MenuBottomBar({ selectedIndex, onChange }: BottomBarProps) {
  const [selected, setSelected] = useState(selectedIndex);

  function handleChanged(index: number) {
    setSelected(index);
    if (onChange) onChange(index);
  }

  return (
    <footer className="w-full bg-gameWhip rounded-t-3xl py-4 flex justify-evenly items-center">
      <MenuBottomBarButton
        active={selected === 0}
        onClick={() => handleChanged(0)}
        icon={Medal}
        label="Liderlik"
      ></MenuBottomBarButton>
      <MenuBottomBarButton
        active={selected === 1}
        onClick={() => handleChanged(1)}
        icon={Home}
        label="Anasayfa"
      ></MenuBottomBarButton>
      <MenuBottomBarButton
        active={selected === 2}
        onClick={() => handleChanged(2)}
        icon={Settings}
        label="Ayarlar"
      />
    </footer>
  );
}

export default MenuBottomBar;
