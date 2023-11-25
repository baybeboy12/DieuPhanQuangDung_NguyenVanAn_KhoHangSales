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
  var [dataUser, setDataUser] = useState(route.params.dataUser);
  useEffect(() => {
    if (route.params?.account) {
      setAccount(route.params.account);
    }
  }, [route.params?.account]);

  useEffect(() => {
    calculateTotal();
  }, [account.carts]);

  const calculateTotal = () => {
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
      address: account.address,
      phone: account.phone,
      fullName: account.fullName,
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

    navigation.navigate("Home", {
      account: newAccount,
      dataUser: dataUser,
    });
  };

  const handleDeleteItem = (item) => {
    const updatedCarts = account.carts.filter(
      (product) => product.name !== item.name
    );

    // Tạo một bản sao tạm thời của account với giỏ hàng mới
    const tempAccount = { ...account, carts: updatedCarts };

    // Gửi request cập nhật giỏ hàng lên API
    fetch(`https://6540984045bedb25bfc22306.mockapi.io/account/${account.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempAccount),
    })
      .then((response) => response.json())
      .then(() => {
        // Cập nhật state account với giá trị mới từ bản sao tạm thời
        setAccount(tempAccount);

        // Thông báo cho màn hình DetailProduct về sự thay đổi
        navigation.navigate("Home", {
          account: tempAccount,
          itemDeleted: true,
          dataUser: dataUser,
        });
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật giỏ hàng trên API:", error);
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
          <View style={styles.productContainer}>
            <View style={styles.ViewProduct}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productText}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  VND
                </Text>
                <Text style={styles.soLuong}>Số lượng: {item.soLuong}</Text>
              </View>
            </View>
            <View style={styles.deleteButton}>
              <Pressable onPress={() => handleDeleteItem(item)}>
                <Image
                  source={require("./image/IconDeleteProduct.png")}
                  style={styles.deleteIcon}
                />
              </Pressable>
            </View>
          </View>
        )}
      />

      <View style={styles.bottomContainer}>
        <Pressable
          style={styles.viewHome}
          onPress={() =>
            navigation.navigate("Home", {
              account: account,
              dataUser: dataUser,
            })
          }
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
            Home
          </Text>
          <Image
            source={require("./image/IconHome.png")}
            style={styles.homeIcon}
          ></Image>
        </Pressable>
        <Pressable style={styles.viewThanhToan} onPress={handleThanhToan}>
          <Text style={styles.thanhToanText}>Thanh toán</Text>
          <Image
            source={require("./image/IconThanhToan.png")}
            style={styles.thanhToanIcon}
          ></Image>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  titleContainer: {
    backgroundColor: "#FFCC33",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  productContainer: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    borderRadius: 10,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    marginBottom: 15,
    alignItems: "center",
    backgroundColor: "white",
  },
  ViewProduct: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  productText: {
    flex: 1,
    justifyContent: "center",
    marginTop: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
  },
  soLuong: {
    fontSize: 14,
  },
  deleteButton: {
    width: 30,
    height: 30,
    backgroundColor: "#FF5733", // Màu nền của nút Delete
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 15, // Để tạo hình tròn
  },
  deleteIcon: {
    width: 15,
    height: 15,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  viewTong: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderRadius: 10,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 15,
    backgroundColor: "#FF9933",
  },
  tongLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  viewThanhToan: {
    width: "50%",
    height: 50,
    flexDirection: "row",
    backgroundColor: "#00C853",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  thanhToanText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  thanhToanIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  viewHome: {
    width: "50%",
    height: 50,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  homeIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
});
