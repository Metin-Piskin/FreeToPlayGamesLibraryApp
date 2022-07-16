import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import styles from "./GameCard.style";

const GameCard = ({ onSelect, library }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.firstcontainer}>
                <View style={styles.container}>
                    <Image source={{ uri: library.thumbnail }} style={styles.image} />
                    <View style={styles.title_container}>
                        <Text style={styles.title}>{library.title}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
export default GameCard;