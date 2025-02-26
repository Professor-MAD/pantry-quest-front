import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function LoginModal() {
  const [usernameInput, setUsernameInput] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <View>
        <Text style={styles.userNameTextAbove}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your username"
          value={usernameInput}
          onChangeText={setUsernameInput}
        />
      </View>
      <View>
        <Text style={styles.userNameTextAbove}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your password"
          value={usernameInput}
          onChangeText={setUsernameInput}
        />
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <View>
          <Text>LOGIN</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.orSignUpUsing}>Or Sign Up Using</Text>
        <View>
          <Image />
        </View>
      </View>
      <View style={styles.signUpBottom}>
        <Text style={styles.signUpBottom}>Or Sign Up Using</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.orSignUpUsingBottom}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    display: "flex",
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontFamily: "Bellfoods",
    backgroundColor: "white",
    color: "grey",
    width: 300,
    // 🔹 iOS SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // 🔹 Android SHADOW
    elevation: 8,
    margin: 5,
  },
  userNameTextAbove: {
    color: "grey",
    fontFamily: "Bellfoods",
    margin: 5,
  },
  forgotPassword: {
    color: "grey",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    fontFamily: "Bellfoods",
  },
  loginButton: {
    backgroundColor: "yellow",
    width: 220,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    height: 35,
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
  orSignUpUsing: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    color: "grey",
    fontFamily: "Bellfoods",
  },
  signUpBottom: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "grey",
    fontFamily: "Bellfoods",
    height: 70,
  },
  orSignUpUsingBottom: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 70,
    borderRadius: 40,
    color: "grey",
    fontFamily: "Bellfoods",
    backgroundColor: "pink",
    marginTop: 20,
    // 🔹 iOS SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // 🔹 Android SHADOW
    elevation: 8,
    margin: 5,
  },
});
