import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    firstcontainer: {
        backgroundColor: "#b2bec3",
    },
    container: {
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: "#d63031",
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 6,
        padding: 10,
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
    },
    image: {
        width: Dimensions.get('window').width / 2.1,
        height: Dimensions.get('window').width / 4,
        resizeMode:'contain',
        borderRadius: 20,
    },
    title_container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize:24,
        fontWeight:'500',
        color:'white',
    },
});
export default styles;