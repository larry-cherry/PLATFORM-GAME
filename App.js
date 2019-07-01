import React, { PureComponent } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import level1 from "./src/entities/levels/level1/level1";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GameEngine
        ref={"engine"}
        style={styles.game}
        systems={[]}
        entities={level1()}
      >
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  game: {
    backgroundColor: "blue"
  }
});
