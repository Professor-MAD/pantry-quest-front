import React, { useState, useRef } from "react";
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

  // Food Image Getter
  const getFoodImage = (foodName) => {
    const images = {
      Apple: require("../assets/apple.png"),
      Carrot: require("../assets/carrot.png"),
      Bread: require("../assets/bread.png"),
    };
    return images[foodName] || require("../assets/apple.png");
  };

  // useRef to track PanResponder positions
  const pantryRefs = useRef({});

  const createPanResponder = (id) => {
    if (!pantryRefs.current[id]) {
      pantryRefs.current[id] = { x: 100, y: 200 };
    }

    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        pantryRefs.current[id] = {
          x: pantryRefs.current[id].x + gesture.dx,
          y: pantryRefs.current[id].y + gesture.dy,
        };

        setPantryItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id
              ? {
                  ...item,
                  x: pantryRefs.current[id].x,
                  y: pantryRefs.current[id].y,
                }
              : item
          )
        );
      },
      onPanResponderRelease: () => {
        // Flatten offsets to prevent weird jumps
      },
    });
  };

  // Add food to pantry
  const addFoodToPantry = (food) => {
    const id = Date.now();
    pantryRefs.current[id] = { x: 100 + pantryItems.length * 20, y: 200 };

    setPantryItems((prev) => [
      ...prev,
      {
        id,
        name: food,
        source: getFoodImage(food),
        x: pantryRefs.current[id].x,
        y: pantryRefs.current[id].y,
      },
    ]);

    setShowFoodSearch(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pantryBackground}>
        <Image
          source={require("../assets/pantry-background.png")}
          style={styles.pantryImage}
        />
      </View>

      {/* Show Add Options */}
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

      {/* Show Food Search */}
      {showFoodSearch && (
        <View style={styles.foodSearchContainer}>
          <FoodSearch onSelectFood={addFoodToPantry} />
        </View>
      )}

      {/* Display Pantry Items */}
      {pantryItems.map((item) => {
        const panResponder = createPanResponder(item.id);
        return (
          <View
            key={item.id}
            {...panResponder.panHandlers}
            style={[styles.pantryItem, { top: item.y, left: item.x }]}
          >
            <Image source={item.source} style={styles.foodImage} />
          </View>
        );
      })}

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
