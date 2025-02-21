import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantry Quest</Text>

      <View style={styles.mainContentContainer}>
        {/* First Row */}
        <View style={styles.row}>
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
        </View>

        {/* Second Row */}
        <View style={styles.row}>
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
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#d9534f",
  },
  mainContentContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "purple",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
    // backgroundColor: "red",
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: "#f9d4ba",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    margin: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
