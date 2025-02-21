import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Pantry Quest</Text>
      <Button
        title="Go to Pantry"
        onPress={() => navigation.navigate("Pantry")}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Grocery")}
      >
        <Text style={styles.buttonText}>Go to Groceries</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  button: {
    paddingTop: 10,
  },
  buttonText: {},
});
