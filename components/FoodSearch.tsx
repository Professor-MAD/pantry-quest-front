import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const mockFoodItems = [
  "Apple",
  "Banana",
  "Bread",
  "Carrot",
  "Cheese",
  "Chicken",
  "Eggs",
  "Fish",
  "Grapes",
  "Lettuce",
  "Milk",
  "Onion",
  "Orange",
  "Potato",
  "Rice",
  "Tomato",
  "Yogurt",
];

export default function FoodSearch({ onSelectFood }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = mockFoodItems.filter((food) =>
    food.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type a food name..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <ScrollView style={styles.scrollContainer}>
        {filteredItems.map((food, index) => (
          <TouchableOpacity
            key={index}
            style={styles.foodButton}
            onPress={() => onSelectFood(food)}
          >
            <Text style={styles.foodText}>{food}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontFamily: "Bellfoods",
  },
  scrollContainer: {
    maxHeight: 300,
  },
  foodButton: {
    padding: 15,
    backgroundColor: "#FFA500",
    marginVertical: 5,
    borderRadius: 5,
  },
  foodText: {
    color: "white",
    fontWeight: "normal",
    fontFamily: "Bellfoods",
    fontSize: 20,
  },
});
