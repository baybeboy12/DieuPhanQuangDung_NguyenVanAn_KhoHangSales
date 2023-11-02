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
export default function SignUp({}) {
  return (
    <View style={styles.container}>
        <View style={styles.headerSignIn}>
            <Image style={styles.setImageSignIn}
                   source={require("../image/logo.jpg")}
            ></Image>
        </View>
        <View style={styles.inputText}>
            <View style={styles.textLogin}>
              <TextInput style={styles.textEmail} placeholder="Email"></TextInput>
            </View>
            <View style={styles.textPass}>
              <TextInput style={styles.textPassWord} placeholder="Password"></TextInput>
              <Icon name="eye" style={styles.setIcon1} size={30} color="black" />
            </View>
            <View style={styles.textPass}>
              <TextInput style={styles.textEmail} placeholder="Name"></TextInput>
            </View>
            <View style={styles.textPass}>
              <TextInput style={styles.textEmail} placeholder="Addres"></TextInput>
            </View>
            <View style={styles.textPass}>
              <TextInput style={styles.textEmail} placeholder="Phone"></TextInput>
            </View>
            <View style={styles.viewButton}>
              <Pressable style={styles.pressSignIn} 
                // onPress={}
              >
                    <Text style={styles.textSign}>SIGN UP</Text>
                </Pressable>
            </View>
        </View>
        <View style={styles.viewUp}>
           <Text style={styles.tk}>Sign in your Account -></Text>
           <Pressable
            // onPress={}
            >
              <Text style={styles.textSignUp}>Sign In</Text>
            </Pressable>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  headerSignIn:{
    width:"100%",
    height:150,
    alignContent:"center",
    alignItems:"center",
    // backgroundColor:"red"
  },
  setImageSignIn:{
    width:200,
    height:50,
    marginTop:60
  },
  inputText:{
    width:"100%",
    height:280,
    // backgroundColor:"red",
    alignItems:"center"
  },
  textLogin:{
    width:"80%",
    height:40,
    borderWidth:1,
    borderRadius:15,

  },
  textEmail:{
    width:"90%",
    height:24,
    marginTop:6,
    marginLeft:5,
    borderRadius:15
  },
  textPass:{
    width:"80%",
    height:40,
    borderWidth:1,
    borderRadius:15,
    marginTop:10,
    alignContent:"center"
  },
  textPassWord:{
    width:"85%",
    height:24,
    marginTop:8,
    marginLeft:5,
    borderRadius:15
  },
  setIcon1:{
    width:30,
    height:30,
    marginLeft:270,
    marginTop:-30
  },
  viewButton:{
    width:"80%",
    height:40,
    borderWidth:1,
    borderRadius:15,
    marginTop:10,
    alignItems:"center",
    alignContent:"center"
  },
  button: {
    backgroundColor: 'blue',
    color: 'white', 
    fontSize: 20, 
    paddingHorizontal: 20, 
    paddingVertical: 10,
    borderRadius: 100, 
  },
  pressSignIn:{
    width:"100%",
    height:"100%",
    backgroundColor:"green",
    borderRadius:15,
    alignContent:"center",
    alignItems:"center",
  },
  textSign:{
    fontSize:20,
    fontWeight:700,
    color:"white",
    marginTop:5
  },
  viewUp:{
    width:"100%",
    height:50,
    alignItems:"center",
    // backgroundColor:"red",
    flexDirection:"row",
    alignContent:"center"
  },
  tk:{
    fontSize:18,
    fontWeight:700,
    marginLeft:60
  },
  textSignUp:{
    fontSize:18,
    fontWeight:700,
    color:"green"
  }

});


