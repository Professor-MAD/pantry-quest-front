import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"; // ✅ Import Linear Gradient

export default function SignUpModal({ setOnSignUpPage }) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust for iOS and Android
      style={styles.keyboardView}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.loginText}>Sign Up</Text>

          {/* Username Input */}
          <View style={styles.inputContainer}>
            <FontAwesome
              name="user"
              size={24}
              color="grey"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Type your username"
              value={usernameInput}
              onChangeText={setUsernameInput}
              keyboardType="default"
              autoCapitalize="none"
              returnKeyType="next"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="lock"
              size={24}
              color="grey"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Type your password"
              secureTextEntry
              value={passwordInput}
              onChangeText={setPasswordInput}
              keyboardType="default"
              returnKeyType="done"
            />
          </View>

          {/* Retype Password Input */}
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="lock"
              size={24}
              color="grey"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Retype to confirm your password"
              secureTextEntry
              value={passwordInput}
              onChangeText={setPasswordInput}
              keyboardType="default"
              returnKeyType="done"
            />
          </View>

          {/* Login Button with Gradient */}
          <TouchableOpacity style={styles.loginButton}>
            <LinearGradient
              colors={["#ffcc70", "#ff8c42", "#f76c6c"]}
              style={styles.gradientButton}
            >
              <Text style={styles.loginButtonText}>SIGN UP</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Or Sign Up Using */}
          <Text style={styles.orSignUpUsing}>Or Sign Up Using</Text>
          <TouchableOpacity>
            <View style={styles.googleIconWrapper}>
              <FontAwesome
                name="google"
                size={40}
                color="red"
                style={styles.googleIcon}
              />
            </View>
          </TouchableOpacity>

          {/* Sign Up Option - Restored Original Styling */}
          <View style={styles.signUpBottom}>
            <Text style={styles.orSignUpUsingText}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => setOnSignUpPage(false)}>
              <LinearGradient
                colors={["#ffb6c1", "#ff69b4"]}
                style={styles.gradientSignUpButton}
              >
                <Text style={styles.orSignUpUsingBottom}>LOGIN</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.pantryQuestImageContainer}>
            <Image
              style={styles.appLogo}
              source={require("../assets/pantry-quest-logo.png")}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  container: {
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#f9d4ba",
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    display: "flex",
    flexDirection: "column",
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
  googleIconWrapper: {
    backgroundColor: "white",
    borderRadius: 30,
    width: 60,
    // 🔹 iOS SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // 🔹 Android SHADOW
    elevation: 8,
    margin: 5,
  },
  pantryQuestImageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 60,
  },
  appLogo: {
    width: 60,
    height: 60,
    marginTop: 10,
    padding: 15,
    resizeMode: "contain",
  },
});
