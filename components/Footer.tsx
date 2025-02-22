import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      {/* Social Media Icons */}
      <View style={styles.iconRow}>
        <TouchableOpacity>
          <FontAwesome
            name="facebook"
            size={26}
            style={[styles.icon, styles.fbIcon]}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="twitter" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="instagram" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="linkedin" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Copyright Text */}
      <Text style={styles.footerText}>
        Pantry Quest 2025 - Professor MAD Creations
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#e1ecc6",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15, // Space between icons
    marginBottom: 10,
  },
  icon: {
    color: "white",
    backgroundColor: "black",
    borderRadius: 20,
    padding: 6, // Makes them circles
    overflow: "hidden",
  },
  footerText: {
    fontSize: 14,
    color: "black",
    fontFamily: "Bellfoods", // Your custom food font
  },
  fbIcon: {
    paddingHorizontal: 8, // Add more horizontal padding to make it look balanced
    paddingVertical: 6, // Slightly reduce vertical padding
  },
});
