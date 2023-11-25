import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";

export default function User({ navigation }) {
  var route = useRoute();
  var [account, setAccount] = useState(route.params.account);
  const [dataUser, setDataUser] = useState(route.params.dataUser);
  const handleLogout = () => {
    // Tạo bản sao của đối tượng account
    const updatedAccount = { ...account, carts: [] };
    // Cập nhật trạng thái với bản sao mới
    setAccount(updatedAccount);
    // Tiếp tục xử lý đăng xuất
    navigation.navigate("SignIn", { dataUser: dataUser, account: account });
  };
  // console.log(account);
  // console.log(dataUser);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./image/IconAccount.png")}
          style={styles.avatar}
        />
        <Text style={styles.headerText}>Hi {account.fullName}</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionContent}>
          <Pressable
            style={styles.pressable}
            onPress={() =>
              navigation.navigate("UserDetail", { account: account })
            }
          >
            <Text style={styles.text}>Thông tin chi tiết</Text>
            <Image
              source={require("./image/information.png")}
              style={styles.icon}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionContent}>
          <Pressable
            style={styles.pressable}
            onPress={() =>
              navigation.navigate("TermOfService", { account: account })
            }
          >
            <Text style={styles.text}>Điều khoản và dich vụ</Text>
            <Image source={require("./image/terms.png")} style={styles.icon} />
          </Pressable>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionContent}>
          <Pressable
            style={styles.pressable}
            onPress={() =>
              navigation.navigate("ContactScreen", { account: account })
            }
          >
            <Text style={styles.text}>Liên hệ chúng tôi</Text>
            <Image
              source={require("./image/contact.png")}
              style={styles.icon}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable style={styles.logoutButton} onPress={handleLogout}>
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
    flexDirection: "row",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  avatar: {
    width: 48,
    height: 48,
    marginRight: 10,
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
