import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"; // ✅ Import Linear Gradient

export default function LoginModal() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="grey" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Type your username"
          value={usernameInput}
          onChangeText={setUsernameInput}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={24} color="grey" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Type your password"
          secureTextEntry
          value={passwordInput}
          onChangeText={setPasswordInput}
        />
      </View>

      <Text style={styles.forgotPassword}>Forgot password?</Text>

      {/* Login Button with Gradient */}
      <TouchableOpacity style={styles.loginButton}>
        <LinearGradient
          colors={["#ffcc70", "#ff8c42", "#f76c6c"]}
          style={styles.gradientButton}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Or Sign Up Using */}
      <Text style={styles.orSignUpUsing}>Or Sign Up Using</Text>
      <TouchableOpacity>
        <FontAwesome
          name="google"
          size={40}
          color="red"
          style={styles.googleIcon}
        />
      </TouchableOpacity>

      {/* Sign Up Option - Restored Original Styling */}
      <View style={styles.signUpBottom}>
        <Text style={styles.orSignUpUsingText}>Or Sign Up Using</Text>
        <TouchableOpacity style={styles.signUpButton}>
          <LinearGradient
            colors={["#ffb6c1", "#ff69b4"]} // 🔹 Pink → Dark Pink Gradient
            style={styles.gradientSignUpButton}
          >
            <Text style={styles.orSignUpUsingBottom}>SIGN UP</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    padding: 25,
    fontFamily: "Bellfoods",
    color: "white",
    fontSize: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 300,
    marginBottom: 10,
    // 🔹 iOS SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // 🔹 Android SHADOW
    elevation: 8,
    margin: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontFamily: "Bellfoods",
    color: "grey",
  },
  forgotPassword: {
    color: "grey",
    fontFamily: "Bellfoods",
    marginBottom: 20,
  },
  loginButton: {
    borderRadius: 40,
    overflow: "hidden", // Ensures gradient does not leak outside borders
    marginTop: 25,
  },
  gradientButton: {
    width: 220,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
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
  loginButtonText: {
    fontFamily: "Bellfoods",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  orSignUpUsing: {
    color: "grey",
    fontFamily: "Bellfoods",
    marginTop: 15,
  },
  googleIcon: {
    marginVertical: 10,
  },
  signUpBottom: {
    marginTop: 25,
    alignItems: "center",
  },
  orSignUpUsingText: {
    color: "grey",
    fontFamily: "Bellfoods",
  },
  gradientSignUpButton: {
    backgroundColor: "pink",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 100,
    marginTop: 15,
    // 🔹 iOS SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // 🔹 Android SHADOW
    elevation: 8,
    margin: 5,
  },
  orSignUpUsingBottom: {
    fontFamily: "Bellfoods",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
