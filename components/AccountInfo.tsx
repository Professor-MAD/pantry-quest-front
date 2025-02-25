import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AccountInfo() {
  return (
    <View style={styles.container}>
      <Text>Hello, I'm AccountInfo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#f9d4ba",
    zIndex: 300,
    height: "90%",
    width: "90%",
  },
  titleText: {
    color: "black",
  },
});
