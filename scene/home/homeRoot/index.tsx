import { StatusBar, StyleSheet, Text, View } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import Header from "../header";
import JobList from "./jobList";

interface HomeRootProps extends ParamListBase {}

export default function HomeRoot(props: HomeRootProps) {
  return (
    <View style={styles.homeRootContainer}>
      <StatusBar barStyle="default" />
      <Header {...props} />
      <JobList />
    </View>
  );
}

const styles = StyleSheet.create({
  homeRootContainer: {
    flex: 1,
  },
});
