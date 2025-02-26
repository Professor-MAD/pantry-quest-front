import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AccountInfo() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#ed846a",
    zIndex: 300,
    height: "100%",
    width: "100%",
    // borderWidth: 3,
    // borderColor: "#f09296",
    borderRadius: 40,
    // 🔹 iOS SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // 🔹 Android SHADOW
    elevation: 8,
    margin: 5,
  },

  titleText: {
    color: "black",
  },
});
