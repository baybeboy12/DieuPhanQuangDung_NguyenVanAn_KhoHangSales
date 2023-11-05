import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
// import Home from "./Screen/Home";
// import ScreenBot from "./Screen/ScreenBot";
// import ScreenKeo from "./Screen/ScreenKeo";
// import DetailProduct from "./Screen/DetailProduct";
// import Carts from "./Screen/Carts";
// import SignIn from "./Screen/SignIn";
// import SignUp from "./Screen/SignUp";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function User() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>User Profile</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionContent}>
          <Pressable style={styles.pressable}>
            <Text style={styles.text}>User Details</Text>
            <Image
              source={require("./image/information.png")}
              style={styles.icon}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionContent}>
          <Pressable style={styles.pressable}>
            <Text style={styles.text}>Terms of Service</Text>
            <Image source={require("./image/terms.png")} style={styles.icon} />
          </Pressable>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionContent}>
          <Pressable style={styles.pressable}>
            <Text style={styles.text}>Contact Us</Text>
            <Image
              source={require("./image/contact.png")}
              style={styles.icon}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    backgroundColor: "#007AFF",
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#0056b3",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    margin: 10, // Khoảng cách giữa các section
    borderRadius: 10, // Bo góc cho section
  },
  sectionContent: {
    padding: 10,
  },
  pressable: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10, // Bo góc cho pressable
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text: {
    fontSize: 20,
    color: "#007AFF",
  },
  icon: {
    width: 24,
    height: 24,
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
  },
  logoutButton: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff3b30", // Màu đỏ
    borderRadius: 10, // Bo góc
  },
  logoutText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 5,
  },
});
