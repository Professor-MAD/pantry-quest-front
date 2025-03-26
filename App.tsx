import React, { useCallback, useEffect } from "react";
import { View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import PantryScreen from "./screens/PantryScreen";
import GroceryListScreen from "./screens/GroceryListScreen";
import SettingsScreen from "./screens/SettingsScreen";
import RecipeScreen from "./screens/RecipeScreen";
import FridgeScreen from "./screens/FridgeScreen";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Bellfoods: require("./assets/fonts/Bellfoods.ttf"),
  });

  useEffect(() => {
    if (!fontsLoaded) {
      console.log("⏳ Waiting for fonts to load...");
    } else {
      console.log("✅ Font Bellfoods loaded successfully.");
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Pantry" component={PantryScreen} />
          <Stack.Screen name="Grocery" component={GroceryListScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Recipes" component={RecipeScreen} />
          <Stack.Screen name="Fridge" component={FridgeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
