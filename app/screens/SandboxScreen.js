import React from "react";
import { StyleSheet, View } from "react-native";

function SandboxScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
    </View> // View element created inside view
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
  },
});

export default SandboxScreen;
