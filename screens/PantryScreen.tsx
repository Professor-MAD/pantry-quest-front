import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import NavFooter from "@/components/NavFooter";
import AddButtons from "@/components/AddButtons";
import FoodSearch from "@/components/FoodSearch";

export default function PantryScreen({ navigation }) {
  const [showAddOptions, setShowAddOptions] = useState(false);
  const [showFoodSearch, setShowFoodSearch] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.pantryBackground}>
        <Image
          source={require("../assets/pantry-background.png")}
          style={styles.pantryImage}
        />
      </View>

      {/* Toggle Add Options */}
      {showAddOptions && (
        <View style={styles.addButtonOptions}>
          <AddButtons
            onTypeIn={() => {
              setShowFoodSearch(true); // Show food search
              setShowAddOptions(false); // Hide add options
            }}
          />
        </View>
      )}

      {/* Show Food Search when "Type In" is clicked */}
      {showFoodSearch && (
        <View style={styles.foodSearchContainer}>
          <FoodSearch
            onSelectFood={(food) => {
              setSelectedFood(food); // Store selected food
              setShowFoodSearch(false); // Hide search after selection
            }}
          />
        </View>
      )}

      {/* Show Selected Food */}
      {selectedFood && (
        <Text style={styles.selectedFood}>Selected: {selectedFood}</Text>
      )}

      {/* Add Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setShowAddOptions((prev) => !prev)}
      >
        <Image
          source={require("../assets/add-button.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.navFooter}>
        <NavFooter navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#e1ecc6",
    width: "100%",
    height: "100%",
  },
  pantryBackground: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#e1ecc6",
    height: "100%",
  },
  pantryImage: {
    width: "100%",
    height: "100%",
  },
  navFooter: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    zIndex: 10,
  },
  addButton: {
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
    width: 70,
    height: 70,
    zIndex: 20,
  },
  addButtonOptions: {
    position: "absolute",
    bottom: 150,
    alignSelf: "center",
    width: "100%",
    height: 50,
    zIndex: 20,
  },
  foodSearchContainer: {
    position: "absolute",
    top: "40%",
    width: "80%",
    height: "50%",
    backgroundColor: "#f9d4ba",
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    zIndex: 100,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#f09296",
  },
  selectedFood: {
    fontSize: 18,
    marginTop: 10,
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
});
