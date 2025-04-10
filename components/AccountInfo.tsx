import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import ProfileScreen from "@/screens/ProfileScreen";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function AccountInfo() {
  const [onSignUpPage, setOnSignUpPage] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
      setUser(authenticatedUser);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ff8c42" />
      </View>
    );
  }

  return (
    <View style={user ? styles.profileContainer : styles.accountInfoContainer}>
      {user ? (
        <ProfileScreen user={user} onSignOut={() => setUser(null)} />
      ) : onSignUpPage ? (
        <SignUpModal setOnSignUpPage={setOnSignUpPage} />
      ) : (
        <LoginModal
          setOnSignUpPage={setOnSignUpPage}
          onLoginSuccess={() => setUser(auth.currentUser)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  accountInfoContainer: {
    position: "absolute",
    backgroundColor: "#ed846a",
    zIndex: 300,
    height: "100%",
    width: "100%",
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    margin: 5,
  },
  // THIS CLASS CONTROLS SIZE - FOR MOST OTHER STUFF GO TO PROFILESCREEN.TSX, profileScreenContainer CLASS
  profileContainer: {
    flex: 1,
    // backgroundColor: "#f9d4ba",
    width: "100%",
    fontFamily: "Bellfoods",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
