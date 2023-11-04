import * as React from "react";
import SignIn from "./Screen/SignIn";
import SignUp from "./Screen/SignUp";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Screen/Home";
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

