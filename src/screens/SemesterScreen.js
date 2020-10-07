import React from "react";
import { View, StyleSheet, Button } from "react-native";
import FirstSem from "../screens/FirstSem";
import SecondSem from "../screens/SecondSem";
import ThirdSem from "../screens/ThirdSem";

const SemesterScreen = (props) => {
    return (
        <View>
            <View style = {styles.buttonStyle}>
                <Button
                    title="1st Semsester"
                    onPress={function () {
                        props.navigation.navigate("FirstSem");
                    }}
                    color="purple"
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title="2nd Semsester"
                    onPress={function () {
                        props.navigation.navigate("SecondSem");
                    }}
                    color="purple"
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title="3rd Semsester"
                    onPress={function () {
                        props.navigation.navigate("ThirdSem");
                    }}
                    color="purple"
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        color: "white",
        marginVertical: 30,
    },
    viewStyle: {
        margin: 100,
        alignItems: "center"
    },
    buttonStyle: {
        margin: 5,
    },
});
export default SemesterScreen;