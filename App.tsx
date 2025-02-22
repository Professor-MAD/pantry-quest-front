import React, { useCallback } from "react";
import { View } from "react-native"; // Add View for onLayout
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import PantryScreen from "./screens/PantryScreen";
import GroceryListScreen from "./screens/GroceryListScreen";
import SettingsScreen from "./screens/SettingsScreen";
import RecipeScreen from "./screens/RecipeScreen";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Bellfoods: require("./assets/fonts/Bellfoods.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Pantry" component={PantryScreen} />
          <Stack.Screen name="Grocery" component={GroceryListScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Recipes" component={RecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
