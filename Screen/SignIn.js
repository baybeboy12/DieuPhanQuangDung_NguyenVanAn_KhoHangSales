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
import SignUp from "./SignUp";

export default function SignIn({navigation}) {
  var [data,setData] = useState([]);  
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [signInData, setSignInData] = useState([]);
  var route = useRoute();
  useEffect(()=>{
    fetch('https://6540984045bedb25bfc22306.mockapi.io/account')
    .then((response) => response.json())
    .then((json) => {
      data = json;
      setData(json);
    });
  },[])

   useEffect(() => {
        if (route.params?.username && route.params?.password) {
          setData([...data, route.params.username],[...data, route.params.password]);
        }
      }, [route.params?.username],[route.params?.password]);
  
  const handelSignIn = ()=>{
    const user = data.find(
      (user) => user.username === username && user.password === password);
      if(user){
          console.log(user)
            navigation.navigate("Home");
      }else{
        alert("Your email is not exist")
      }
  }
  console.log(data);

  return (
    <View style={styles.container}>
        <View style={styles.headerSignIn}>
            <Image style={styles.setImageSignIn}
                   source={require("../image/logo.jpg")}
            ></Image>
        </View>
        <View style={styles.inputText}>
            <View style={styles.textLogin}>
              <TextInput style={styles.textEmail} placeholder="Enter your UserName"
                onChangeText={(e) => setUsername(e)}
              ></TextInput>
            </View>
            <View style={styles.textPass}>
              <TextInput style={styles.textPassWord} placeholder="Enter your Password"
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
              ></TextInput>
                  <Icon name="eye" style={styles.setIcon1} size={30} color="black" />
            </View>
            <View style={styles.viewButton}>
              <Pressable style={styles.pressSignIn} 
                onPress={()=>handelSignIn()}
              >
                    <Text style={styles.textSign}>SIGN IN</Text>
                </Pressable>
            </View>
        </View>
        <View style={styles.viewUp}>
           <Text style={styles.tk}>Create your Account </Text>
           <Pressable
               style={{
               width: 100,
               height: 50,
               borderWidth: 3,
               borderColor: "grey",
               alignItems: "center",
               justifyContent: "center",
               borderRadius: 20,        
          }}
          onPress={() => navigation.navigate("SignUp")}
          
        >
          <Text style={styles.textSignUp}>Sign Up</Text>
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
    height:150,
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


