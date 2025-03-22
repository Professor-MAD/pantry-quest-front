import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavFooter from "@/components/NavFooter";

export default function RecipeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Recipes Page</Text>
      <View style={styles.navFooterRecipe}>
        <NavFooter navigation={navigation} currentScreen="Recipes" />
      </View>
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
  navFooterRecipe: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    zIndex: 10,
  },
});
