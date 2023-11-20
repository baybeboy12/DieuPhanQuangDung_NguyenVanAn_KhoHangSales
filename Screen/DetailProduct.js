import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";

export default function DetailProduct({ navigation }) {
  const [soLuong, setSoLuong] = useState(1);
  var route = useRoute();
  var [account, setAccount] = useState(route.params.account);
  var [carts, setCarts] = useState([]);
  var [dataUser, setDataUser] = useState(route.params.dataUser);
  useEffect(() => {
    if (route.params?.itemDeleted) {
      fetch(`https://6540984045bedb25bfc22306.mockapi.io/account/${account.id}`)
        .then((response) => response.json())
        .then((updatedAccount) => {
          setAccount(updatedAccount);
        })
        .catch((error) => {
          console.error("Lỗi khi lấy giỏ hàng từ API:", error);
        });
    }
  }, [route.params?.itemDeleted]);
  const increaseQuantity = () => {
    setSoLuong(soLuong + 1);
  };

  const decreaseQuantity = () => {
    if (soLuong > 1) {
      setSoLuong(soLuong - 1);
    }
  };

  var { productName, productImage, productPrice } = route.params;

  const addToCart = () => {
    const newItem = {
      name: productName,
      image: productImage,
      price: productPrice,
      soLuong: soLuong,
    };

    const existingItemIndex = account.carts.findIndex(
      (item) => item.name === newItem.name
    );

    if (existingItemIndex !== -1) {
      account.carts[existingItemIndex].soLuong += newItem.soLuong;
    } else {
      account.carts.push(newItem);
    }

    fetch(`https://6540984045bedb25bfc22306.mockapi.io/account/${account.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        setAccount(updatedUser);
      });

    navigation.navigate("Carts", {
      account: account,
      dataUser: dataUser,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chi tiết sản phẩm</Text>
        <Pressable
          onPress={() => navigation.navigate("Carts", { account: account })}
          style={styles.cartIconContainer}
        >
          <Image
            source={require("./image/IconGioHang.png")}
            style={styles.cartIcon}
          />
        </Pressable>
      </View>
      <View style={styles.productImageContainer}>
        <Image source={{ uri: productImage }} style={styles.productImage} />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{productName}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Giá: </Text>
          <Text style={styles.priceValue}>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(productPrice)}
          </Text>
        </View>
        <Text style={styles.productDescription}>
          Mô tả sản phẩm: Đây là một sản phẩm tốt.
        </Text>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Số lượng:</Text>
        <Pressable onPress={decreaseQuantity} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </Pressable>
        <Text style={styles.quantityText}>{soLuong}</Text>
        <Pressable onPress={increaseQuantity} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </Pressable>
      </View>
      <Pressable style={styles.addToCartButton} onPress={addToCart}>
        <Text style={styles.addToCartButtonText}>Thêm vào giỏ hàng</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    backgroundColor: "#FFCC33",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  cartIconContainer: {
    position: "absolute",
    right: 10,
  },
  cartIcon: {
    width: 30,
    height: 30,
  },
  productImageContainer: {
    alignItems: "center",
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  productInfo: {
    marginVertical: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  priceLabel: {
    fontSize: 16,
    color: "black",
  },
  priceValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
  productDescription: {
    fontSize: 14,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  quantityLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: "#FFCC33",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  quantityButtonText: {
    fontSize: 24,
    color: "white",
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  addToCartButtonText: {
    color: "white",
    fontSize: 18,
  },
});
