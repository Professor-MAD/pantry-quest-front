import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavFooter from "@/components/NavFooter";

export default function GroceryListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Grocery List Page</Text>
      <NavFooter navigation={navigation} />
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
