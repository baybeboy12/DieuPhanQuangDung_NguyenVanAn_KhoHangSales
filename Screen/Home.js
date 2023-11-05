import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";

export default function Home({ navigation }) {
  var route = useRoute();
  const [data, setData] = useState([]);
  const [dataBot, setDataBot] = useState([]);
  const [dataKeo, setDataKeo] = useState([]);
  var [account, setAccount] = useState(route.params.account);
  useEffect(() => {
    if (route.params?.selectUser) {
      setAccount(route.params.selectUser);
    }
  }, [route.params?.selectUser]);
  useEffect(() => {
    setAccount(route.params.account);
  }, [route.params]);
  useEffect(() => {
    fetch(`https://65434a7d01b5e279de20240f.mockapi.io/product`)
      .then((response) => response.json())
      .then((json) => {
        // Sử dụng setData để cập nhật giá trị của state
        setData(json);
        const filteredDataBot = json.filter((item) => item.type === "type 1");
        setDataBot(filteredDataBot);
        const filteredDataKeo = json.filter((item) => item.type === "type 2");
        setDataKeo(filteredDataKeo);
      });
  }, []);
  console.log(account);
  return (
    <View style={styles.container}>
      <Image
        source={require("./image/titlehome.png")}
        style={styles.headerImage}
      />
      <View style={styles.searchContainer}>
        <Image
          source={require("./image/IconSearch.png")}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search"
          style={{
            flex: 1,
            marginLeft: 10,
            width: "60%",
            height: 35,
            outline: "none",
          }}
        />
        <Pressable
          onPress={() => navigation.navigate("Carts", { account: account })}
        >
          <Image
            source={require("./image/IconGioHang.png")}
            style={{ width: 30, height: 30 }}
          ></Image>
        </Pressable>
        <Pressable
        // onPress={() => navigation.navigate("Carts", { account: account })}
        >
          <Image
            source={require("./image/user.png")}
            style={{ width: 30, height: 30 }}
          ></Image>
        </Pressable>
      </View>
      <View style={styles.imageRow}>
        <Image
          source={require("./image/banner.webp")}
          style={styles.homeImage}
        />
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryHeading}>Danh mục sản phẩm</Text>
        <View style={styles.categoryRow}>
          <Pressable
            style={styles.categoryItem}
            onPress={() =>
              navigation.navigate("ScreenBot", { account: account })
            }
          >
            <Image
              source={require("./image/IconBotHoaTan.png")}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>Bột hòa tan</Text>
          </Pressable>
          <Pressable
            style={styles.categoryItem}
            onPress={() =>
              navigation.navigate("ScreenKeo", { account: account })
            }
          >
            <Image
              source={require("./image/IconKeoNgamHo.png")}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>Kẹo ngậm họ</Text>
          </Pressable>
        </View>
      </View>

      {/* Khung cho "Danh mục bột hòa tan" */}
      <View style={styles.categoryFrame}>
        <Text style={styles.categoryFrameText}>Danh mục bột hòa tan</Text>
        <Pressable
          style={styles.categoryFrameButton}
          onPress={() => navigation.navigate("ScreenBot", { account: account })}
        >
          <Text style={styles.categoryFrameButtonText}>Xem thêm</Text>
        </Pressable>
      </View>

      <View style={styles.DanhMuBotHoaTan}>
        <FlatList
          data={dataBot.slice(0, 3)}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Pressable
                onPress={() =>
                  navigation.navigate("DetailProduct", {
                    productId: item.id,
                    productName: item.name,
                    productImage: item.image,
                    productPrice: item.price,
                    account: account,
                  })
                }
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.productImage}
                />
                <Text style={styles.productPrice}>{item.price}</Text>
              </Pressable>
            </View>
          )}
        />
      </View>

      {/* Khung cho "Danh mục kẹo ngậm họ" */}
      <View style={styles.categoryFrame}>
        <Text style={styles.categoryFrameText}>Danh mục kẹo ngậm họ</Text>
        <Pressable
          style={styles.categoryFrameButton}
          onPress={() => navigation.navigate("ScreenKeo", { account: account })}
        >
          <Text style={styles.categoryFrameButtonText}>Xem thêm</Text>
        </Pressable>
      </View>

      <View style={styles.DanhMucKeoNgamHo}>
        <FlatList
          data={dataKeo.slice(0, 3)}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Pressable
                onPress={() =>
                  navigation.navigate("DetailProduct", {
                    productId: item.id,
                    productName: item.name,
                    productImage: item.image,
                    productPrice: item.price,
                    account: account,
                  })
                }
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.productImage}
                />
                <Text style={styles.productPrice}>{item.price}</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#CCFFFF",
  },
  headerImage: {
    width: "100%",
    height: 60,
    position: "absolute",
    top: 0,
  },
  searchContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e8e8e8",
    marginTop: 90,
    borderRadius: 15,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  // searchInput: {
  //   flex: 1,
  //   marginLeft: 10,
  //   width: "60",
  //   height: 35,
  //   outline: "none",
  // },
  imageRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  homeImage: {
    width: "90%",
    height: 150,
    margin: 10,
    borderRadius: 10,
  },
  categoryContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginTop: 15,
    textAlign: "center",
  },
  categoryHeading: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
    width: "90%",
    height: 30,
    backgroundColor: "grey",
    textAlign: "center",
    borderRadius: 5,
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryItem: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "lightgray",
    width: "45%",
    padding: 10,
    borderRadius: 10,
  },
  categoryIcon: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 10,
    textAlign: "center",
  },
  // Phong cách mới cho khung
  categoryFrame: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  categoryFrameText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  categoryFrameButton: {
    backgroundColor: "grey",
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  categoryFrameButtonText: {
    color: "white",
    textAlign: "center",
    marginLeft: 25,
    fontSize: 18,
    fontWeight: "bold",
  },
  // Phong cách cho sản phẩm
  productContainer: {
    margin: 5,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productPrice: {
    marginTop: 10,
    color: "blue",
  },
});
