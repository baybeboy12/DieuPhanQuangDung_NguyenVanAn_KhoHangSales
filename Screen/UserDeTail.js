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

export default function UserDetail() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>User Profile</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.infoItem}>
          <Image
            source={require("./image/IconUserName.png")}
            style={styles.icon}
          />
          <View style={styles.labelValue}>
            <Text style={styles.label}>Username:</Text>
            <Text style={styles.value}></Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.infoItem}>
          <Image
            source={require("./image/IconAddress.png")}
            style={styles.icon}
          />
          <View style={styles.labelValue}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}></Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.infoItem}>
          <Image
            source={require("./image/IconTelePhone.png")}
            style={styles.icon}
          />
          <View style={styles.labelValue}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}></Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.infoItem}>
          <Image source={require("./image/IconName.png")} style={styles.icon} />
          <View style={styles.labelValue}>
            <Text style={styles.label}>Full Name:</Text>
            <Text style={styles.value}></Text>
          </View>
        </View>
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
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoItem: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  labelValue: {
    flex: 1,
    marginLeft: 10,
  },
  label: {
    fontSize: 20,
    color: "#007AFF",
  },
  value: {
    fontSize: 20,
    color: "#333", // Slightly darker text color
  },
  icon: {
    width: 24,
    height: 24,
  },
});
