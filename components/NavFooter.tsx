import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";

interface NavFooterProps {
  navigation: NavigationProp<any>;
  currentScreen: string;
}

export default function NavFooter({
  navigation,
  currentScreen,
}: NavFooterProps) {
  const buttons = [
    { screen: "Home", icon: require("../assets/home-button.png") },
    { screen: "Pantry", icon: require("../assets/pantry-icon.png") },
    { screen: "Grocery", icon: require("../assets/list-icon.png") },
    { screen: "Recipes", icon: require("../assets/recipe-button.png") },
    { screen: "Settings", icon: require("../assets/setting-button.png") },
  ];

  const filteredButtons = buttons.filter((btn) => btn.screen !== currentScreen);

  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        {filteredButtons.map((btn) => (
          <TouchableOpacity
            key={btn.screen}
            style={styles.button}
            onPress={() => navigation.navigate(btn.screen)}
          >
            <Image source={btn.icon} style={styles.icon} />
          </TouchableOpacity>
        ))}
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
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  button: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
});
