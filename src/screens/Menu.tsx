import { useState } from "react";
import AppBar from "../components/AppBar";
import Badge from "../components/Badge";
import MenuBottomBar from "../components/MenuBottomBar";
import View from "../components/View";
import ViewBody from "../components/ViewBody";
import SettingsScreen from "./Settings";
import StartScreen from "./StartScreen";

interface MenuProps {
  startGame: () => void;
}

function Menu({ startGame }: MenuProps) {
  const [index, setIndex] = useState(1);

  const screens = [
    <h1>Gelecek</h1>,
    <StartScreen startGame={startGame} />,
    <SettingsScreen />,
  ];

  return (
    <View background="yellow">
      <AppBar>
        <Badge number={30} />
        <Badge number={456} />
      </AppBar>
      <ViewBody>{screens[index]}</ViewBody>
      <MenuBottomBar
        selectedIndex={1}
        onChange={(index) => {
          setIndex(index);
        }}
      />
    </View>
  );
}

export default Menu;
