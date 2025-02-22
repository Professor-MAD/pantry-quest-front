import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

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
            <Image
              source={require("../assets/pantry-mascot.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Pantry</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Grocery")}
          >
            <Image
              source={require("../assets/list-mascot.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Grocery List</Text>
          </TouchableOpacity>
        </View>

        {/* Second Row */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Settings")}
          >
            <Image
              source={require("../assets/recipe-mascot.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Recipe")}
          >
            <Image
              source={require("../assets/gear-mascot.png")}
              style={styles.icon}
            />
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
    fontFamily: "Bellfoods",
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
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#f09296",
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
    backgroundColor: "#f09296",
    width: 150,
    marginTop: 5,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  icon: {
    width: 90,
    height: 100,
    marginBottom: 0,
    marginTop: 20,
  },
});
