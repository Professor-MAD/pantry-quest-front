import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantry Quest</Text>

      <View style={styles.mainContentContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Pantry")}
        >
          <Text style={styles.buttonText}>Pantry</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Grocery")}
        >
          <Text style={styles.buttonText}>Grocery List</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Recipe")}
        >
          <Text style={styles.buttonText}>Recipes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#e1ecc6",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#d9534f",
  },
  mainContentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "50%",
    backgroundColor: "purple",
  },
  button: {
    width: 150, // Set explicit width
    height: 150, // Set explicit height
    aspectRatio: 1,
    backgroundColor: "#f28e2b",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
