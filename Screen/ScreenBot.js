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

export default function ScreenBot({ navigation }) {
  var route = useRoute();
  var [dataBot, setDataBot] = useState([]);
  var [account, setAccount] = useState(route.params.account);
  var [product, setProduct] = useState(route.params.productBot);

  useEffect(() => {
    fetch(`https://65434a7d01b5e279de20240f.mockapi.io/product`)
      .then((response) => response.json())
      .then((json) => {
        // Lọc dữ liệu có type là "type 1"
        var filteredDataBot = json.filter((item) => item.type === "type 1");
        setDataBot(filteredDataBot);
      });
  }, []);

  console.log(account);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Bột hòa tan mát</Text>
        <Pressable
          onPress={() => navigation.navigate("Carts", { account: account })}
        >
          <Image
            source={require("./image/IconGioHang.png")}
            style={{ marginLeft: 100, width: 30, height: 30 }}
          ></Image>
        </Pressable>
      </View>
      <FlatList
        data={dataBot}
        numColumns={2}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Pressable
              onPress={() =>
                navigation.navigate("DetailProduct", {
                  // Truyền thông tin sản phẩm bằng params
                  productId: item.id,
                  productName: item.name,
                  productImage: item.image,
                  productPrice: item.price,
                  account: account,
                  // Thêm thông tin sản phẩm khác nếu cần
                })
              }
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(item.price)}
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingTop: 20,
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
    color: "white", // Màu chữ trắng
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    color: "red", // Màu chữ đỏ
    textAlign: "center",
  },
});
