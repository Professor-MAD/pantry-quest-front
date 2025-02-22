import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function PantryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.pantryBackground}>
        <Image
          source={require("../assets/pantry-background.png")}
          style={styles.pantryImage}
        />
      </View>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  pantryBackground: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#e1ecc6",
  },
  pantryImage: {
    width: "100%",
    height: "90%",
  },
});
