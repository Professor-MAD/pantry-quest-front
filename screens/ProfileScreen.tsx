import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileScreen({ user, onSignOut }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>{user.displayName || "N/A"}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}>Account ID:</Text>
        <Text style={styles.value}>{user.uid}</Text>

        <Text style={styles.label}>Household ID:</Text>
        <Text style={styles.value}>{"None (Join or Create one!)"}</Text>
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
      <TouchableOpacity onPress={onSignOut} style={styles.signOutButton}>
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
    padding: 15,
    borderRadius: 10,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  value: {
    fontSize: 16,
    color: "grey",
    marginBottom: 10,
  },
  button: {
    borderRadius: 40,
    overflow: "hidden",
    width: 220,
    marginTop: 15,
  },
  gradient: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  buttonText: {
    fontFamily: "Bellfoods",
    fontSize: 16,
    color: "white",
  },
  signOutButton: {
    marginTop: 20,
    backgroundColor: "#f76c6c",
    padding: 10,
    borderRadius: 20,
  },
  signOutText: {
    fontFamily: "Bellfoods",
    fontSize: 16,
    color: "white",
  },
});
