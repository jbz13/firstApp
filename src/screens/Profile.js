import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Profile = () => {
    return (
        <View style={styles.viewStyle}>
            <Image
                source={require('../../assets/myphoto.jpg')}
                style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>
                Name: Jawad Ibne Zamal{"\n"}
                Student ID: 170042061{"\n"}
                Section: B{"\n"}
                Phone No: 01521257774{"\n"}
                Address: Mirpur, Dhaka
        </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        color: "black",
        margin: 20,
        alignSelf: "center",
    },
    viewStyle: {
        margin: 30,
        alignSelf: "center"
    },
    imageStyle: {
        height: 280,
        width: 350,
        alignSelf: 'center',
    },
});

export default Profile;