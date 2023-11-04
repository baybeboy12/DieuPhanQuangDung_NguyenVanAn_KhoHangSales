import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";

export default function DetailProduct({ navigation }) {
  const [soLuong, setSoLuong] = useState(1);
  var route = useRoute();
  var [account, setAccount] = useState(route.params.account);
  var [carts, setCarts] = useState([]);
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
      name: productName, // Sử dụng thuộc tính từ product
      image: productImage,
      price: productPrice,
      soLuong: soLuong,
    };

    // Tìm sản phẩm trong giỏ hàng với cùng tên
    const existingItemIndex = account.carts.findIndex(
      (item) => item.name === newItem.name
    );

    if (existingItemIndex !== -1) {
      // Nếu sản phẩm đã tồn tại, cộng số lượng mới vào số lượng hiện tại
      account.carts[existingItemIndex].soLuong += newItem.soLuong;
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm mới
      account.carts.push(newItem);
    }

    // Lưu dữ liệu giỏ hàng và người dùng đã được cập nhật
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

    // Điều hướng người dùng đến màn hình giỏ hàng
    navigation.navigate("Carts", {
      account: account,
    });
  };

  console.log(account);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Chi tiết sản phẩm </Text>
        <Pressable
          onPress={() => navigation.navigate("Carts", { account: account })}
        >
          <Image
            source={require("./image/IconGioHang.png")}
            style={{ marginLeft: 100, width: 30, height: 30 }}
          ></Image>
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: productImage }} style={styles.productImage} />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.productPrice}>{productPrice}</Text>
        <Text style={styles.productDescription}>
          Mô tả sản phẩm: Đây là một sản phẩm tốt.
        </Text>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Số lượng:</Text>
        <Pressable onPress={decreaseQuantity}>
          <Text style={styles.quantityButton}>-</Text>
        </Pressable>
        <Text style={styles.quantityText}>{soLuong}</Text>
        <Pressable onPress={increaseQuantity}>
          <Text style={styles.quantityButton}>+</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.addToCartButton}
        onPress={
          addToCart
          // () =>
          // navigation.navigate("Carts", {
          //   getSoLuong: soLuong,
          //   getNameProduct: productName,
          //   getImageProduct: productImage,
          //   getPriceProduct: productPrice,
          //   getSelectUserDetailProduct: account,
          // })
        }
      >
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
  imageContainer: {
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
  },
  productPrice: {
    fontSize: 16,
    color: "blue",
    marginBottom: 10,
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
    fontSize: 24,
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
  addToCartButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
