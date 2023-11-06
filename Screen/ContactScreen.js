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
export default function Contact (navigation) {
    return (
        <View style={styles.container}>
          <View style={[styles.setTilte, styles.backgroundwhite]}>
            <Text style={styles.textTitle}>Contact Us</Text>
          </View>
          <View style={[styles.setEmail, styles.backgroundGreen]}>
            <Text style={styles.text}>khohangsales@gmail.com</Text>
          </View>
          <View style={[styles.setPhone, styles.backgroundBlue]}>
            <Text style={styles.text}>19001007</Text>
          </View>
          <View style={[styles.setFace, styles.backgroundOrange]}>
            <Text style={styles.text}>facebook.com</Text>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems:"center"

      },
      setTilte:{
        marginBottom: 20,
        width:"80%",
        height:60,
        borderRadius: 10,
        alignItems:"center",
        borderWidth:1,
        marginTop:20,
        elevation: 10, // Độ sâu đổ bóng
        shadowColor: 'black', // Màu đổ bóng
        shadowOffset: { width: 10, height: 7 }, // Độ chênh lệch (độ dài và độ rộng) của đổ bóng
        shadowOpacity: 0.3, // Độ trong suốt của đổ bóng
        shadowRadius: 3,
      },
      setEmail: {
        marginBottom: 20,
        width:"80%",
        height:60,
        borderRadius: 10,
        alignItems:"center",
        elevation: 10, // Độ sâu đổ bóng
        shadowColor: '#8CC84B', // Màu đổ bóng
        shadowOffset: { width: 10, height: 7 }, // Độ chênh lệch (độ dài và độ rộng) của đổ bóng
        shadowOpacity: 0.3, // Độ trong suốt của đổ bóng
        shadowRadius: 3,
      },
      setPhone: {
        marginBottom: 20,
        width:"80%",
        height:60,
        borderRadius: 10,
        alignItems:"center",
        elevation: 10, // Độ sâu đổ bóng
        shadowColor: '#008000', // Màu đổ bóng
        shadowOffset: { width: 10, height: 7 }, // Độ chênh lệch (độ dài và độ rộng) của đổ bóng
        shadowOpacity: 0.3, // Độ trong suốt của đổ bóng
        shadowRadius: 3,
      },
      setFace: {
        marginBottom: 20,
        width:"80%",
        height:60,
        borderRadius: 10,
        alignItems:"center",
        elevation: 10, // Độ sâu đổ bóng
        shadowColor: 'red', // Màu đổ bóng
        shadowOffset: { width: 10, height: 7 }, // Độ chênh lệch (độ dài và độ rộng) của đổ bóng
        shadowOpacity: 0.3, // Độ trong suốt của đổ bóng
        shadowRadius: 3,
      },
      text: {
        fontSize: 18,
        marginTop:18,
        fontWeight:700,
        color: 'white', // Màu chữ là màu trắng
      },
      textTitle:{
        fontSize: 18,
        marginTop:18,
        fontWeight:700,
        color: 'black',
      },
      backgroundGreen: {
        backgroundColor: 'green',
      },
      backgroundBlue: {
        backgroundColor: 'blue',
      },
      backgroundOrange: {
        backgroundColor: 'orange',
      },
      backgroundwhite: {
        backgroundColor: 'white',
      },
    });