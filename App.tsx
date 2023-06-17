import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons, Feather } from "@expo/vector-icons";
import { Text } from "react-native";
import Home from "./scene/home";
import User from "./scene/user";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          tabBarActiveTintColor: "#00b4b3",
          // tabBarInactiveTintColor: "#bbb",
          // header: () => null,
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="职位"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="package" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="我的"
          component={User}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
