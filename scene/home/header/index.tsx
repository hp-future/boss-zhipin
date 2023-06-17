import { View, StyleSheet, Text, Pressable } from "react-native";
import { Link } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.left}></View>
      <View style={styles.right}>
        <Link to={{ screen: "Search" }}>
          <Feather name="search" size={20} />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 40,
    flexDirection: "row",
  },
  left: {
    flex: 1,
    backgroundColor: "pink",
  },
  right: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 14,
  },
});
