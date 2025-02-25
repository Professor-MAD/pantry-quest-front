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
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#e1ecc6",
  },
  titleText: {
    color: "black",
  },
});
