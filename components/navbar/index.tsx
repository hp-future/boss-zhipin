import { StyleSheet, Text, View } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbarIten}>
        <Text>navbar1</Text>
      </View>
      <View style={styles.navbarIten}>
        <Text>navbar2</Text>
      </View>
      <View style={styles.navbarIten}>
        <Text>navbar3</Text>
      </View>
      <View style={styles.navbarIten}>
        <Text>navbar4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    height: 40,
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderTopColor: "#d9d9d9",
    borderTopWidth: 1,
  },
  navbarIten: {
    // backgroundColor: "skyblue",
  },
});
