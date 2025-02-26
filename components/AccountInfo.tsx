import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function AccountInfo() {
  const [onSignUpPage, setOnSignUpPage] = useState(false);

  return (
    <View style={onSignUpPage ? styles.containerForSignUp : styles.container}>
      {onSignUpPage ? (
        <SignUpModal setOnSignUpPage={setOnSignUpPage} />
      ) : (
        <LoginModal setOnSignUpPage={setOnSignUpPage} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#ed846a", // Color for login page
    zIndex: 300,
    height: "100%",
    width: "100%",
    borderRadius: 40,
    // 🔹 iOS SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    // 🔹 Android SHADOW
    elevation: 8,
    margin: 5,
  },
  containerForSignUp: {
    position: "absolute",
    backgroundColor: "#f9d4ba", // Color for sign-up page
    zIndex: 300,
    height: "100%",
    width: "100%",
    borderRadius: 40,
    // 🔹 iOS SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    // 🔹 Android SHADOW
    elevation: 8,
    margin: 5,
  },
  titleText: {
    color: "black",
  },
});
