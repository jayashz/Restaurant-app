import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AvailableMeals from "./screens/AvailableMeals";
import MealDetail from "./screens/MealDetail";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: { backgroundColor: "#D8D2C2" },
            contentStyle: { backgroundColor: "#FAF7F0" },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoryScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="Available-meals"
            component={AvailableMeals}
          />

          <Stack.Screen 
          name="Meal-details"
          component={MealDetail}>
            
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
