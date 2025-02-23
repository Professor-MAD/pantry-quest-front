import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function AddButtons() {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <TouchableOpacity>
          <Image
            source={require("../assets/type-button.png")}
            style={styles.sideIcons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/scan-button.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/ai-button.png")}
            style={styles.sideIcons}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  iconRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "30%",
    height: "100%",
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    // marginLeft: 5,
  },
  sideIcons: {
    marginTop: 20,
    width: 40,
    height: 40,
    resizeMode: "contain",
    // marginLeft: 5,
  },
});
