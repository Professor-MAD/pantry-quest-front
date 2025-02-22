import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function NavFooter({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../assets/home-button.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Grocery")}
        >
          <Image
            source={require("../assets/list-button.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Recipes")}
        >
          <Image
            source={require("../assets/recipe-button.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            source={require("../assets/setting-button.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    height: "70%",
  },
  iconRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
    height: "100%",
    marginBottom: 10,
  },
  icon: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  button: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
});
