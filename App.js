import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
} from "react-native";
import * as React from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import SignIn from "./Screen/SignIn";
import SignUp from "./Screen/SignUp";
// import { useState, useEffect } from "react";
// import { useRoute } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";

export default function App() {
  return (
    // <SignIn/>
    <SignUp/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
