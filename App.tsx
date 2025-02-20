import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen"; // We'll create this next
import PantryScreen from "./screens/PantryScreen"; // Placeholder for later

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pantry" component={PantryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
