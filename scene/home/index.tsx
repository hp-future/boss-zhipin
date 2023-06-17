import { Text, View, StyleSheet, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeRoot from "./homeRoot";
import Search from "./search";

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      initialRouteName="HomeRoot"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeRoot" component={HomeRoot} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
});
