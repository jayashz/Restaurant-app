import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import CategoryScreen from "./StackScreens/CategoryScreen";
import AvailableMeals from "./StackScreens/AvailableMeals";
import MealDetail from "./StackScreens/MealDetail";
export default function Home() {
    const Stack = createNativeStackNavigator();
    return (
      <>
        <StatusBar style="dark" />
  
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
          <Stack.Screen name="Available-meals" component={AvailableMeals} />
  
          <Stack.Screen name="Meal-details" component={MealDetail}></Stack.Screen>
        </Stack.Navigator>
      </>
    );
  }