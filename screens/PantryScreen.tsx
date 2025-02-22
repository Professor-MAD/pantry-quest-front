import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import NavFooter from "@/components/NavFooter";

export default function PantryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.pantryBackground}>
        <Image
          source={require("../assets/pantry-background.png")}
          style={styles.pantryImage}
        />
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Image
          source={require("../assets/add-button.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.navFooter}>
        <NavFooter navigation={navigation} />
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
  addButton: {
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
    width: 70,
    height: 70,
    zIndex: 20,
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
});
