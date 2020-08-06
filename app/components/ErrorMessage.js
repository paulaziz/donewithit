import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null; // if there is no error nothing will be returned
  return <AppText style={styles.error}>{error}</AppText>;
}
const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});

export default ErrorMessage;
