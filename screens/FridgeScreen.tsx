import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Animated,
  PanResponder,
  StyleSheet,
} from "react-native";
import NavFooter from "@/components/NavFooter";
import AddButtons from "@/components/AddButtons";
import FoodSearch from "@/components/FoodSearch";

export default function FridgeScreen({ navigation }) {
  const [showAddOptions, setShowAddOptions] = useState(false);
  const [showFoodSearch, setShowFoodSearch] = useState(false);
  const [fridgeItems, setFridgeItems] = useState([]);

  // **🔹 Animated Value for Horizontal Pivoting**
  const arrowPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateArrow = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(arrowPosition, {
            toValue: 5,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(arrowPosition, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animateArrow();
  }, []);

  // Food Image Getter
  const getFoodImage = (foodName) => {
    const images = {
      Apple: require("../assets/apple.png"),
      Carrot: require("../assets/carrot.png"),
      Bread: require("../assets/bread.png"),
      Banana: require("../assets/banana.png"),
      Cheese: require("../assets/cheese.png"),
      Chicken: require("../assets/chicken.png"),
      Eggs: require("../assets/eggs.png"),
      Fish: require("../assets/fish.png"),
    };
    return images[foodName] || require("../assets/apple.png");
  };

  // useRef to track PanResponder positions
  const fridgeRefs = useRef({});

  const createPanResponder = (id) => {
    if (!fridgeRefs.current[id]) {
      fridgeRefs.current[id] = { x: 100, y: 200 };
    }

    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        fridgeRefs.current[id] = {
          x: fridgeRefs.current[id].x + gesture.dx,
          y: fridgeRefs.current[id].y + gesture.dy,
        };

        setFridgeItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id
              ? {
                  ...item,
                  x: fridgeRefs.current[id].x,
                  y: fridgeRefs.current[id].y,
                }
              : item
          )
        );
      },
    });
  };

  // Add food to fridge
  const addFoodToFridge = (food) => {
    const id = Date.now();
    fridgeRefs.current[id] = { x: 100 + fridgeItems.length * 20, y: 200 };

    setFridgeItems((prev) => [
      ...prev,
      {
        id,
        name: food,
        source: getFoodImage(food),
        x: fridgeRefs.current[id].x,
        y: fridgeRefs.current[id].y,
      },
    ]);

    setShowFoodSearch(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.fridgeBackground}>
        <Image
          source={require("../assets/fridge.png")}
          style={styles.fridgeImage}
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
          <FoodSearch onSelectFood={addFoodToFridge} />
        </View>
      )}

      {/* Display Fridge Items */}
      {fridgeItems.map((item) => {
        const panResponder = createPanResponder(item.id);
        return (
          <View
            key={item.id}
            {...panResponder.panHandlers}
            style={[styles.fridgeItem, { top: item.y, left: item.x }]}
          >
            <Image source={item.source} style={styles.foodImage} />
          </View>
        );
      })}

      <TouchableOpacity
        style={styles.leftArrowButton}
        onPress={() => navigation.navigate("Pantry")}
      >
        <Animated.View
          style={[
            styles.arrowContainer,
            { transform: [{ translateX: arrowPosition }] }, // Moves left and right
          ]}
        >
          <Image
            source={require("../assets/left-arrow.png")}
            style={styles.arrowIcon}
          />
        </Animated.View>
      </TouchableOpacity>

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
    backgroundColor: "#d0e1f9", // Change to a light blue for fridge
    width: "100%",
    height: "100%",
  },
  fridgeBackground: {
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  fridgeImage: {
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
    backgroundColor: "#d0e1f9",
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    zIndex: 100,
    borderWidth: 3,
    borderColor: "#4a90e2",
  },
  fridgeItem: {
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
  leftArrowButton: {
    position: "absolute",
    left: 20,
    top: "50%",
    width: 50,
    height: 50,
    zIndex: 30,
  },
  arrowContainer: {
    width: "100%",
    height: "100%",
  },
  arrowIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
