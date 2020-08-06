import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import defaultStyles from "../config/styles";
import AppText from "./AppText";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
