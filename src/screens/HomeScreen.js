import React from "react";
import { Text, StyleSheet, View, Button, ScrollView, Image, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
    return (
    <ScrollView>
        <View>
            <Image
                source={require("../../assets/iut.png")}
                style={styles.imageStyle}
            />

                <Text style={{ color: "Black", fontSize: 23, textAlign: "center" }}>Department of CSE{"\n"}Program: SWE{"\n"}</Text>

            <TouchableOpacity onPress={function () { props.navigation.navigate("Profile"); }}>
                    <Text style={{ fontSize: 18, color: "indigo", textAlign: "center" }}>
                        My Profile{"\n"}
                    </Text>
            </TouchableOpacity>

            <Button 
                title ="List of Faculty Members"
                onPress={function () {
                    props.navigation.navigate("Faculty");
                }}
                color="black"
            />

            <Button
                title ="Semester Wise Course List"
                onPress={function () { props.navigation.navigate("Semesters"); }}
                color="purple"
            />

        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "black",
    },
  imageStyle: {
    height: 350,
    width: 210,
    alignSelf: 'center',
    },

  viewStyle: {
    margin: 50,
    alignSelf: "center",
    },
});

export default HomeScreen;
