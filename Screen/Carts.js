import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
export default function Carts({ navigation }) {
  var route = useRoute();
  var [account, setAccount] = useState(route.params.account);
  var [total, setTotal] = useState(0);
  useEffect(() => {
    if (route.params?.account) {
      setAccount(route.params.account);
    }
  }, [route.params?.account]);

  useEffect(() => {
    calculateTotal();
  }, [account.carts]);
  const calculateTotal = () => {
    // Sử dụng reduce để tính tổng giá trị từ mảng sản phẩm trong giỏ hàng
    const newTotal = account.carts.reduce((acc, item) => {
      return acc + item.price * item.soLuong;
    }, 0);
    setTotal(newTotal);
  };
  var handleThanhToan = () => {
    var newAccount = {
      id: account.id,
      username: account.username,
      password: account.password,
      carts: [],
    };
    fetch(
      `https://6540984045bedb25bfc22306.mockapi.io/account/${newAccount.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAccount),
      }
    )
      .then((response) => response.json())
      .then((newAccount) => {
        setAccount(newAccount);
      });

    // Điều hướng người dùng đến màn hình giỏ hàng
    navigation.navigate("Home", {
      account: newAccount,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Giỏ hàng của bạn</Text>
      </View>
      <FlatList
        data={account.carts}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.ViewProduct}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 50, height: 50, marginLeft: 15 }}
            ></Image>
            <View style={styles.productText}>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
              <Text>{item.soLuong}</Text>
            </View>
          </View>
        )}
      />

      <View style={styles.viewTong}>
        <Text style={{ marginLeft: 20 }}>Tổng</Text>
        <Text style={{ marginLeft: 180 }}>{total}</Text>
      </View>
      <Pressable style={styles.viewThanhToan} onPress={handleThanhToan}>
        <Text>Thanh toán</Text>
        <Image
          source={require("./image/IconThanhToan.png")}
          style={{ width: 30, height: 30, marginLeft: 30 }}
        ></Image>
      </Pressable>
    </View>
  );
}
// FFCC99
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  titleContainer: {
    backgroundColor: "#FFCC33", // Màu cam nhạt
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white", // Màu chữ đen
  },
  ViewProduct: {
    flexDirection: "row",
    width: "100%",
    height: 70,
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 2,
    alignItems: "center",
  },
  productText: {
    marginLeft: 20,
  },
  viewTong: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 2,
    alignItems: "center",
    backgroundColor: "#FF9933",
    marginTop: 30,
  },
  viewThanhToan: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    marginTop: 30,
    backgroundColor: "#CCFFFF",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
