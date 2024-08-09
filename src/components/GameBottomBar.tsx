import { AlarmClockIcon, Bomb, Hammer, RotateCcw } from "lucide-react";
import { useState } from "react";
import { GameBottomBarButton } from "./GameBottomBarButton";

interface BottomBarProps {
  selectedIndex: number;
  onChange?: (index: number) => void;
}

function GameBottomBar({ selectedIndex, onChange }: BottomBarProps) {
  const [selected, setSelected] = useState(selectedIndex);

  function handleChanged(index: number) {
    setSelected(index);
    if (onChange) onChange(index);
  }

  return (
    <footer className="w-full bg-white/10 rounded-3xl py-4 px-6 gap-4 flex justify-evenly items-center">
      <GameBottomBarButton
        active={selected === 0}
        onClick={() => handleChanged(0)}
        variant="bomb"
        count={1}
        icon={Bomb}
      ></GameBottomBarButton>
      <GameBottomBarButton
        active={selected === 1}
        onClick={() => handleChanged(1)}
        variant="hint"
        count={2}
        icon={Hammer}
      ></GameBottomBarButton>
      <GameBottomBarButton
        active={selected === 2}
        onClick={() => handleChanged(2)}
        variant="restart"
        icon={RotateCcw}
      />
      <GameBottomBarButton
        active={selected === 3}
        onClick={() => handleChanged(3)}
        variant="addTime"
        count={3}
        icon={AlarmClockIcon}
      />
    </footer>
  );
}

export default GameBottomBar;
