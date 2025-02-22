import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Footer from "@/components/Footer";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text
          style={[styles.title, styles.titleOutline, { left: -2, top: -2 }]}
        >
          Pantry Quest
        </Text>

        {/* Main Text */}
        <Text style={styles.title}>Pantry Quest</Text>
      </View>

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
            <View style={styles.buttonBackground}>
              <Text style={styles.buttonText}>Pantry</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Grocery")}
          >
            <Image
              source={require("../assets/list-mascot.png")}
              style={styles.icon}
            />
            <View style={styles.buttonBackground}>
              <Text style={styles.buttonText}>Grocery List</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Second Row */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Recipes")}
          >
            <Image
              source={require("../assets/recipe-mascot.png")}
              style={styles.icon}
            />
            <View style={styles.buttonBackground}>
              <Text style={styles.buttonText}>Recipes</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Settings")}
          >
            <Image
              source={require("../assets/gear-mascot.png")}
              style={styles.icon}
            />
            <View style={styles.buttonBackground}>
              <Text style={styles.buttonText}>Settings</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainIconContainer}>
        <Image
          source={require("../assets/pantry-quest-logo.png")}
          style={styles.mainIcon}
        />
      </View>
      <Footer></Footer>
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
  titleContainer: {
    position: "relative",
  },
  title: {
    display: "none",
    fontSize: 45,
    fontWeight: "normal",
    marginBottom: 10,
    marginTop: 20,
    color: "#ffffff",
    fontFamily: "Bellfoods",
    textAlign: "center",

    // 🔹 TEXT SHADOW
    textShadowColor: "#f09296",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 10,
  },

  titleOutline: {
    position: "absolute",
    fontSize: 45,
    fontWeight: "normal",
    fontFamily: "Bellfoods",
    color: "#f09296",
  },
  mainContentContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
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

    // 🔹 iOS SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // 🔹 Android SHADOW
    elevation: 8,

    margin: 5,
  },
  buttonBackground: {
    width: 150,
    height: 35,
    backgroundColor: "rgba(240, 146, 150, 0.8)",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
    marginBottom: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Bellfoods",
    letterSpacing: 1.5,
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  icon: {
    width: 90,
    height: 100,
    marginBottom: 0,
    marginTop: 50,
  },
  mainIconContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    paddingVertical: 10,
    backgroundColor: "transparent",
  },

  mainIcon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
