import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favourites from "./screens/TabScreens/Favourites";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Logout from "./screens/Logout";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import store from "./store/store";

export default function Main() {
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={store}>

        <Tab.Navigator
          screenOptions={{
            tabBarInactiveTintColor: "grey",
            contentStyle:{
              backgroundColor:"#FAF7F0",
            }
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <AntDesign name="home" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Favourites"
            component={Favourites}
            options={{
              tabBarActiveTintColor: "red",
              tabBarInactiveTintColor: "grey",
              headerStyle: { backgroundColor: "red" },
              tabBarIcon: ({ color, focused }) => (
                <Entypo name="heart" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Exit"
            component={Logout}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="exit-to-app" size={24} color={color} />
              ),
              headerStyle:{
                backgroundColor:"#D8D2C2",
              },
              contentStyle:{

              }
            }}
          />
        </Tab.Navigator>

    </Provider>
  );
}

