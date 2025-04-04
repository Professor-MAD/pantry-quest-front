import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Footer from "@/components/Footer";
import AccountInfo from "@/components/AccountInfo";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

// Navigation types

type RootStackParamList = {
  Home: undefined;
  Pantry: undefined;
  Grocery: undefined;
  Recipes: undefined;
  Settings: undefined;
};

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
  route: RouteProp<RootStackParamList, "Home">;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [showAccountInfoModal, setShowAccountInfoModal] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (showAccountInfoModal) {
          setShowAccountInfoModal(false);
        }
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setShowAccountInfoModal(true)}>
          <Image
            style={styles.chefImage}
            source={require("../assets/user-info-finished-copy.png")}
          />
        </TouchableOpacity>
        {showAccountInfoModal && (
          <View style={styles.accountInfoContainer}>
            <AccountInfo />
          </View>
        )}

        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.title,
              styles.titleOutline,
              { left: -2, top: -2, fontFamily: "Bellfoods" },
            ]}
          >
            Pantry Quest
          </Text>

          {/* Main Text */}
          <Text style={[styles.title, { fontFamily: "Bellfoods" }]}>
            Pantry Quest
          </Text>
        </View>

        <View style={styles.mainContentContainer}>
          {/* First Row */}
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Pantry")}
            >
              <Image
                source={require("../assets/pantry-icon.png")}
                style={styles.icon}
              />
              <View style={styles.buttonBackground}>
                <Text style={[styles.buttonText, { fontFamily: "Bellfoods" }]}>
                  Pantry
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Grocery")}
            >
              <Image
                source={require("../assets/list-icon.png")}
                style={styles.listIcon}
              />
              <View style={styles.buttonBackground}>
                <Text style={[styles.buttonText, { fontFamily: "Bellfoods" }]}>
                  Grocery List
                </Text>
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
                <Text style={[styles.buttonText, { fontFamily: "Bellfoods" }]}>
                  Recipes
                </Text>
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
                <Text style={[styles.buttonText, { fontFamily: "Bellfoods" }]}>
                  Settings
                </Text>
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
    </TouchableWithoutFeedback>
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
    marginTop: -15,
    marginBottom: 40,
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
    height: 120,
    marginBottom: 0,
    marginTop: 50,
  },
  listIcon: {
    width: 90,
    height: 130,
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
  chefImage: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 10,
    left: 130,
  },
  accountInfoContainer: {
    position: "absolute",
    top: "5%", // Centers it vertically
    left: "5%", // Centers it horizontally
    backgroundColor: "transparent", // 🔹 Slight transparency
    zIndex: 250,
    height: "90%",
    width: "90%",
    borderRadius: 40,
    justifyContent: "center", // 🔹 Ensures child elements are centered
    alignItems: "center",
  },
});
