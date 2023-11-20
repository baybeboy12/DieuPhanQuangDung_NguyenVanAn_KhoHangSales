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

export default function SignIn({ navigation }) {
  var [dataUser, setDataUser] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({});
  const route = useRoute();

  useEffect(() => {
    fetch("https://6540984045bedb25bfc22306.mockapi.io/account")
      .then((response) => response.json())
      .then((json) => {
        dataUser = json;
        setDataUser(json);
      });
  }, []);
  useEffect(() => {
    if (route.params?.dataUser) {
      fetch(`https://6540984045bedb25bfc22306.mockapi.io/account`)
        .then((response) => response.json())
        .then((json) => {
          route.params.dataUser = json;
          setDataUser(json);
        });
    }
  }, [route.params]);

  const handleSignIn = () => {
    const account = dataUser.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (account) {
      // Tạo bản sao của tài khoản đăng nhập
      const updatedAccount = { ...account };

      // Gán giỏ hàng từ tài khoản trước đó
      if (user && user.carts) {
        updatedAccount.carts = user.carts;
      }

      setUser(updatedAccount);
      navigation.navigate("Home", {
        account: account,
        dataUser: dataUser,
      });
    } else {
      alert("Your account is not exist");
    }
  };

  // Hàm xử lý hiển thị/ẩn mật khẩu
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSignIn}>
        <Image
          style={styles.setImageSignIn}
          source={require("./image/logo.jpg")}
        />
      </View>
      <View style={styles.inputText}>
        <View style={styles.textLogin}>
          <TextInput
            style={{
              width: "90%",
              height: 24,
              marginTop: 6,
              marginLeft: 5,
              borderRadius: 15,
              outlineStyle: "none",
              fontSize: 20,
            }}
            placeholder="UserName"
            onChangeText={(e) => setUsername(e)}
          />
        </View>
        <View style={styles.textPass}>
          <TextInput
            style={{
              width: "90%",
              height: 24,
              marginTop: 6,
              marginLeft: 5,
              borderRadius: 15,
              outlineStyle: "none",
              fontSize: 20,
            }}
            placeholder="Password"
            secureTextEntry={!showPassword} // Sử dụng secureTextEntry để ẩn mật khẩu
            onChangeText={(e) => setPassword(e)}
          />
          <Icon
            name={showPassword ? "eye-slash" : "eye"} // Chọn icon dựa vào trạng thái showPassword
            style={styles.setIcon1}
            size={30}
            color="black"
            onPress={togglePasswordVisibility} // Gọi hàm khi ấn vào icon
          />
        </View>
        <View style={styles.viewButton}>
          <Pressable style={styles.pressSignIn} onPress={handleSignIn}>
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
    backgroundColor: "white",
  },
  headerSignIn: {
    width: "100%",
    height: 150,
    alignContent: "center",
    alignItems: "center",
    // backgroundColor:"red"
  },
  setImageSignIn: {
    width: 200,
    height: 50,
    marginTop: 60,
  },
  inputText: {
    width: "100%",
    height: 150,
    // backgroundColor:"red",
    alignItems: "center",
  },
  textLogin: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderRadius: 15,
  },
  // textEmail: {
  //   width: "90%",
  //   height: 24,
  //   marginTop: 6,
  //   marginLeft: 5,
  //   borderRadius: 15,
  // },
  textPass: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    alignContent: "center",
  },
  textPassWord: {
    width: "85%",
    height: 24,
    marginTop: 8,
    marginLeft: 5,
    borderRadius: 15,
  },
  setIcon1: {
    width: 30,
    height: 30,
    marginLeft: 270,
    marginTop: -30,
  },
  viewButton: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    alignItems: "center",
    alignContent: "center",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
  },
  pressSignIn: {
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    borderRadius: 15,
    alignContent: "center",
    alignItems: "center",
  },
  textSign: {
    fontSize: 20,
    fontWeight: 700,
    color: "white",
    marginTop: 5,
  },
  viewUp: {
    width: "100%",
    height: 50,
    alignItems: "center",
    // backgroundColor:"red",
    flexDirection: "row",
    alignContent: "center",
  },
  tk: {
    fontSize: 18,
    fontWeight: 700,
    marginLeft: 60,
  },
  textSignUp: {
    fontSize: 18,
    fontWeight: 700,
    color: "green",
  },
});
