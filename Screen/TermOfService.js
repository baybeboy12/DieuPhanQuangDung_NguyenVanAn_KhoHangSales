import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function TermOfService({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Điều khoản Dịch vụ</Text>
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Chào mừng bạn đến với ứng dụng!
          </Text>
          <Text style={styles.content}>
            Xin vui lòng đọc kỹ các điều khoản và điều kiện này trước khi sử
            dụng ứng dụng của chúng tôi.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Sử dụng ứng dụng</Text>
          <Text style={styles.content}>
            Bằng cách sử dụng ứng dụng, bạn đồng ý rằng bạn chỉ có thẩm quyền sử
            dụng ứng dụng cho các mục đích hợp pháp và tuân thủ tất cả các quy
            định và điều khoản.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Quyền sở hữu</Text>
          <Text style={styles.content}>
            Tất cả quyền sở hữu trí tuệ và tài sản trí tuệ trong ứng dụng này
            thuộc sở hữu của chúng tôi.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Bảo mật</Text>
          <Text style={styles.content}>
            Chúng tôi cam kết bảo mật thông tin cá nhân của bạn và tuân thủ các
            quy định về bảo mật.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Thay đổi Điều khoản</Text>
          <Text style={styles.content}>
            Chúng tôi có quyền thay đổi các điều khoản và điều kiện mà không cần
            thông báo trước.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  header: {
    backgroundColor: "#007AFF",
    padding: 20,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
});
