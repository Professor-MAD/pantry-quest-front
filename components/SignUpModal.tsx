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
import { LinearGradient } from "expo-linear-gradient";
import { signUp } from "../authService"; // ✅ Import sign-up function

export default function SignUpModal({ setOnSignUpPage }) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  const handleSignUp = async () => {
    if (!emailInput || !passwordInput || !confirmPasswordInput) {
      console.error("Please fill in all fields.");
      return;
    }

    if (passwordInput !== confirmPasswordInput) {
      console.error("Passwords do not match.");
      return;
    }

    try {
      const user = await signUp(emailInput, passwordInput);
      console.log("User signed up & stored in Firestore:", user);
      setOnSignUpPage(false); // Redirect to login after sign-up
    } catch (error) {
      console.error("Sign Up Error:", error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardView}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.loginText}>Sign Up</Text>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <FontAwesome
              name="user"
              size={24}
              color="grey"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Type your email"
              value={emailInput}
              onChangeText={setEmailInput}
              keyboardType="email-address"
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
              returnKeyType="next"
            />
          </View>

          {/* Confirm Password Input */}
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="lock"
              size={24}
              color="grey"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              secureTextEntry
              value={confirmPasswordInput}
              onChangeText={setConfirmPasswordInput}
              keyboardType="default"
              returnKeyType="done"
            />
          </View>

          {/* Sign-Up Button */}
          <TouchableOpacity onPress={handleSignUp} style={styles.loginButton}>
            <LinearGradient
              colors={["#ffcc70", "#ff8c42", "#f76c6c"]}
              style={styles.gradientButton}
            >
              <Text style={styles.loginButtonText}>SIGN UP</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Already have an account? */}
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

          {/* App Logo */}
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
});
