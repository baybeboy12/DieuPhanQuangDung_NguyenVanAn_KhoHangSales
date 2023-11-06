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
import { Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
export default function Home(navigation) {

    return (
      <View>
        <Button
        title="Go to Contact"
        onPress={() => navigation.navigate('Contact')}
      />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    contact:{
      width:"70%",
      height:30,
      backgroundColor:"red"
    }
  });