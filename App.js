import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Screen/Home";
import ScreenBot from "./Screen/ScreenBot";
import ScreenKeo from "./Screen/ScreenKeo";
import DetailProduct from "./Screen/DetailProduct";
import Carts from "./Screen/Carts";
import SignIn from "./Screen/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ScreenBot" component={ScreenBot} />
        <Stack.Screen name="ScreenKeo" component={ScreenKeo} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
        <Stack.Screen name="Carts" component={Carts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
