import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Main";
import Welcome from "./screens/Welcome";

export default function App(){
  const Stack= createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }} >
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Main" component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}