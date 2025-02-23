import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  PanResponder,
  StyleSheet,
} from "react-native";
import NavFooter from "@/components/NavFooter";
import AddButtons from "@/components/AddButtons";
import FoodSearch from "@/components/FoodSearch";

export default function PantryScreen({ navigation }) {
  const [showAddOptions, setShowAddOptions] = useState(false);
  const [showFoodSearch, setShowFoodSearch] = useState(false);
  const [pantryItems, setPantryItems] = useState([]);

  const getFoodImage = (foodName) => {
    const images = {
      Apple: require("../assets/apple.png"),
      Carrot: require("../assets/carrot.png"),
      Bread: require("../assets/bread.png"),
    };

    // If the food name exists in the images object, return the image.
    // Otherwise, return a fallback image (one of your existing images for now).
    return images[foodName] || require("../assets/apple.png");
  };

  const handlePanResponder = (id) => {
    return PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        setPantryItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id
              ? { ...item, x: gesture.moveX, y: gesture.moveY }
              : item
          )
        );
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.pantryBackground}>
        <Image
          source={require("../assets/pantry-background.png")}
          style={styles.pantryImage}
        />
      </View>

      {showAddOptions && (
        <View style={styles.addButtonOptions}>
          <AddButtons
            onTypeIn={() => {
              setShowFoodSearch(true);
              setShowAddOptions(false);
            }}
          />
        </View>
      )}

      {showFoodSearch && (
        <View style={styles.foodSearchContainer}>
          <FoodSearch
            onSelectFood={(food) => {
              setPantryItems((prev) => [
                ...prev,
                {
                  id: Date.now(),
                  name: food,
                  source: getFoodImage(food),
                  x: 50,
                  y: 50,
                },
              ]);
              setShowFoodSearch(false);
            }}
          />
        </View>
      )}

      {pantryItems.map((item) => (
        <View
          key={item.id}
          {...handlePanResponder(item.id).panHandlers}
          style={[styles.pantryItem, { top: item.y, left: item.x }]}
        >
          <Image source={item.source} style={styles.foodImage} />
        </View>
      ))}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setShowAddOptions((prev) => !prev)}
      >
        <Image
          source={require("../assets/add-button.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      <View style={styles.navFooter}>
        <NavFooter navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e1ecc6",
    width: "100%",
    height: "100%",
  },
  pantryBackground: {
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
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
    borderWidth: 3,
    borderColor: "#f09296",
  },
  pantryItem: {
    position: "absolute",
    width: 60,
    height: 60,
  },
  foodImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
});
