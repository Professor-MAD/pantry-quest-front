import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getUserData, logOut } from "../authService";
import { auth } from "../firebaseConfig";

export default function ProfileScreen({ onSignOut }) {
  const [userData, setUserData] = useState(null);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;
      try {
        const data = await getUserData(user.uid);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user]);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>No User Logged In</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}>Account Created:</Text>
        <Text style={styles.value}>{userData?.createdAt || "Loading..."}</Text>

        <Text style={styles.label}>Household ID:</Text>
        <Text style={styles.value}>
          {userData?.householdID || "None (Join or Create one!)"}
        </Text>
      </View>

      {/* Buttons to create or join a household */}
      <TouchableOpacity style={styles.button}>
        <LinearGradient colors={["#ffb6c1", "#ff69b4"]} style={styles.gradient}>
          <Text style={styles.buttonText}>Create Household</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <LinearGradient colors={["#ffcc70", "#ff8c42"]} style={styles.gradient}>
          <Text style={styles.buttonText}>Join Household</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Sign Out Button */}
      <TouchableOpacity
        onPress={async () => {
          await logOut();
          onSignOut();
        }}
        style={styles.signOutButton}
      >
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9d4ba",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontFamily: "Bellfoods",
    color: "black",
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    width: "100%",
  },
  label: {
    fontSize: 16,
    color: "black",
    fontFamily: "Bellfoods",
    fontWeight: "normal",
  },
  value: {
    fontSize: 16,
    color: "grey",
    marginBottom: 10,
    fontFamily: "Bellfoods",
    fontWeight: "normal",
  },
  signOutText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 10,
    width: 100,
    textAlign: "center",
    height: 30,
    borderRadius: 30,
    // 🔹 iOS SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // 🔹 Android SHADOW
    elevation: 8,
    margin: 5,
    fontFamily: "Bellfoods",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
    marginTop: 10,
    width: 100,
    textAlign: "center",
    height: 30,
    borderRadius: 30,
    // 🔹 iOS SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // 🔹 Android SHADOW
    elevation: 8,
    margin: 5,
    fontFamily: "Bellfoods",
  },
  buttonText: {
    backgroundColor: "transparent",
    fontFamily: "Bellfoods",
  },
  gradient: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
    marginTop: 10,
    width: 100,
    textAlign: "center",
    height: 30,
    borderRadius: 30,
    // 🔹 iOS SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    fontFamily: "Bellfoods",

    // 🔹 Android SHADOW
    elevation: 8,
    margin: 5,
  },
});
