import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b2bec3",
    },
    image_container: {

    },
    thumbnail: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 3,
        resizeMode: 'contain',
    },
    body_container: {
        margin: 5,

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
    description: {
        color: "black",
    },
    aaa: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },
    genre: {
        color: "black",
    },
    platform: {
        color: "black",
    },
    publisher: {
        color: "black",
    },
    developer: {
        color: "black",
    },
    release_date: {
        color: "black",
    },
    Sistem_Gereksinimleri: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: 10,
    },
    os: {
        color: "black",
    },
    processor: {
        color: "black",
    },
    memory: {
        color: "black",
    },
    graphics: {
        color: "black",
    },
    storage: {
        color: "black",
    },
    Web: {
        marginVertical: 10,
        padding: 13,
        backgroundColor: "#d63031",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    Web_Sitesi: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    },
    Game_Profili: {
        marginVertical: 10,
        padding: 13,
        backgroundColor: "#d63031",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    Free_to_Game: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    },
    kut: {
        //borderWidth: 1,
        backgroundColor: "#d63031",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 40,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 6
    },
    screenshots_container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    screenshots: {
        margin: 5,
    },
    screenshotsimage: {
        width: Dimensions.get("window").width / 2.17,
        height: Dimensions.get("window").height / 8,
        resizeMode: "contain",
    },
});
export default styles;