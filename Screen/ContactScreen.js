import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import * as React from "react";


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
          <View style={[styles.setEmail, styles.backgroundwhite]}>
            <Image source={require("../image/emailCon.jpg")}
            style={styles.setImage}
            ></Image>
            <View style={styles.text1}>
              <Text style={styles.text}>Email:</Text>
              <Text style={styles.text}>khohangsales@gmail.com</Text>
            </View>
          </View>
          <View style={[styles.setPhone, styles.backgroundwhite]}>
            <Image source={require("../image/phone-call.jpg")}
            style={styles.setImage}
            ></Image>
            <View style={styles.text1}>
              <Text style={styles.text}>Phone:</Text>
              <Text style={styles.text}>19001007</Text>
            </View>
          </View>
          <View style={[styles.setFace, styles.backgroundwhite]}>
            <Image source={require("../image/facebook.jpg")}
            style={styles.setImage}
            ></Image>
            <View style={styles.text1}>
              <Text style={styles.text}>Link:</Text>
              <Text style={styles.text}>facebook.com</Text> 
            </View>
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
        marginBottom: 10,
        width:"80%",
        height:100,
        borderRadius: 10,
        flexDirection:"row",
        elevation: 10, // Độ sâu đổ bóng
        shadowColor: 'black', // Màu đổ bóng
        shadowOffset: { width: 10, height: 7 }, // Độ chênh lệch (độ dài và độ rộng) của đổ bóng
        shadowOpacity: 0.3, // Độ trong suốt của đổ bóng
        shadowRadius: 3,
      },
      setPhone: {
        marginBottom: 20,
        width:"80%",
        height:100,
        borderRadius: 10,
        flexDirection:"row",
        elevation: 10, // Độ sâu đổ bóng
        shadowColor: 'black', // Màu đổ bóng
        shadowOffset: { width: 10, height: 7 }, // Độ chênh lệch (độ dài và độ rộng) của đổ bóng
        shadowOpacity: 0.3, // Độ trong suốt của đổ bóng
        shadowRadius: 3,
      },
      setFace: {
        marginBottom: 20,
        width:"80%",
        height:100,
        borderRadius: 10,
        flexDirection:"row",
        elevation: 10, // Độ sâu đổ bóng
        shadowColor: 'black', // Màu đổ bóng
        shadowOffset: { width: 10, height: 7 }, // Độ chênh lệch (độ dài và độ rộng) của đổ bóng
        shadowOpacity: 0.3, // Độ trong suốt của đổ bóng
        shadowRadius: 3,
      },
      text: {
        fontSize: 18,
        marginTop:18,
        fontWeight:700,
        marginLeft:5,
        color: 'black', // Màu chữ là màu trắng
      },
      textTitle:{
        fontSize: 18,
        marginTop:18,
        fontWeight:700,
        color: 'black',
        marginLeft:5
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
      setImage:{
        width:30,
        height:30,
        marginLeft:5,
        marginTop:15
      },
      text1:{
        flexDirection:"column"
      }
    });