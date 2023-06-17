import { StyleSheet, View, FlatList, Text } from "react-native";

export default function JobList() {
  const data = [
    { id: "1", content: "2323232a" },
    { id: "2", content: "wew" },
    { id: "3", content: "232trtrtr3232" },
    { id: "4", content: "2323ghghg232" },
    { id: "5", content: "232555553232" },
  ];

  return (
    <View style={styles.jobListContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Text>{item.content}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  jobListContainer: {
    flex: 1,
  },
});
