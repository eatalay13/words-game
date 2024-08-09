import { useState } from "react";
import AppBar from "../components/AppBar";
import Badge from "../components/Badge";
import BottomBar from "../components/BottomBar";
import View from "../components/View";
import ViewBody from "../components/ViewBody";
import SettingsScreen from "./Settings";
import StartScreen from "./StartScreen";

function Menu() {
  const [index, setIndex] = useState(1);
  return (
    <View>
      <AppBar>
        <Badge number={30} />
        <Badge number={456} />
      </AppBar>
      <ViewBody>
        {index == 0 && <h1>Gelecek</h1>}
        {index == 1 && <StartScreen startGame={() => {}} />}
        {index == 2 && <SettingsScreen />}
      </ViewBody>
      <BottomBar
        selectedIndex={1}
        onChange={(index) => {
          setIndex(index);
        }}
      />
    </View>
  );
}

export default Menu;
