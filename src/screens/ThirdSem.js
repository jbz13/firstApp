import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
const ThirdSem = () => {
    const courses = [
        { name: "Hum 4247: Accounting" },
        { name: "Hum 4249: Business Psychology and Communications" },
        { name: "Math 4241 Integral Calculus and Differential Equations" },
        { name: "CSE 4203 Discrete Mathematics" },
        { name: "CSE 4205 Digital Logic Design" },
        { name: "SWE 4201: Object Oriented Concepts I" },
    ];
    return (
        <View style={styles.viewStyle}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={courses}
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
        color: "purple",
        marginVertical: 15,
    },
    viewStyle: {
        margin: 50,
        alignSelf: "center",
    },
});
export default ThirdSem;