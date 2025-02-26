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
        <Text styles={styles.orSignUpUsing}>Or Sign Up Using</Text>
        <View>
          <Image />
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
  },
  orSignUpUsing: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
