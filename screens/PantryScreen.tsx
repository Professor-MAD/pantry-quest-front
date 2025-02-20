import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PantryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Pantry Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
