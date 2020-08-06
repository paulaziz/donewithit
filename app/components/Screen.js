import React from "react";
// imrn import from react-native shortuct
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

// rnss shortuct
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
