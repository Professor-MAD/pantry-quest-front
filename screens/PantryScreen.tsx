import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import NavFooter from "@/components/NavFooter";

export default function PantryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.pantryBackground}>
        <Image
          source={require("../assets/pantry-background.png")}
          style={styles.pantryImage}
        />
      </View>
      <View style={styles.navFooter}>
        <NavFooter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#e1ecc6",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  pantryBackground: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#e1ecc6",
    height: "100%",
  },
  pantryImage: {
    width: "100%",
    height: "100%",
  },
  navFooter: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    zIndex: 10,
  },
});
