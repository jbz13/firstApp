import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const FacultyList = () => {
  const faculty = [
    { name: "Ashraful Alam Khan" },
    { name: "Fazlul Hasan Siddique" },
    { name: "Tasnim Ahmed" },
    { name: "Ridwan Kabir" },
    { name: "Mohayeminul Islam" },
    { name: "Sohel ahmed" },
  ];

  return (
    <View style={styles.viewStyle}>
      <FlatList
        style={styles.ListStyle}
        data={faculty}
        renderItem={function ({ item }) {
          return <Text style={styles.textStyle}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "red",
    marginVertical: 30,
  },
  viewStyle: {
      margin: 50,
      alignSelf: "center",
  },
});

export default FacultyList;
