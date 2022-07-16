import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from "react-native";
import styles from "./DetailCard.style";

const DetailCard = ({ gameList }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.image_container} >
                <Image source={{ uri: gameList.thumbnail }} style={styles.thumbnail} />
            </View>
            <View style={styles.body_container}>
                <View style={styles.kut}>
                    <Text style={styles.title}>{gameList.title}</Text>
                </View>

                <Text style={styles.description}>{gameList.description}</Text>

                <View style={styles.kut}>
                    <Text style={styles.aaa}>Bilgiler</Text>
                </View>
                <Text style={styles.genre}>Tür: {gameList.genre}</Text>
                <Text style={styles.platform}>Platform: {gameList.platform}</Text>
                <Text style={styles.publisher}>Yayımcı: {gameList.publisher}</Text>
                <Text style={styles.developer}>Geliştirici : {gameList.developer}</Text>
                <Text style={styles.release_date}>Yayın Tarihi: {gameList.release_date}</Text>

                {gameList.platform === "Windows" ? (
                    <View>
                        <View style={styles.kut}>
                            <Text style={styles.Sistem_Gereksinimleri}>Sistem Gereksinimleri</Text>
                        </View>
                        <Text style={styles.os}>İşletim Sistemleri: {gameList.minimum_system_requirements.os}</Text>
                        <Text style={styles.processor}>İşemci: {gameList.minimum_system_requirements.processor}</Text>
                        <Text style={styles.memory}>Ram: {gameList.minimum_system_requirements.memory}</Text>
                        <Text style={styles.graphics}>Ekran Kartı: {gameList.minimum_system_requirements.graphics}</Text>
                        <Text style={styles.storage}>Boyut: {gameList.minimum_system_requirements.storage}</Text>
                    </View>
                ) : (
                    <View></View>
                )}

                <View style={styles.kut}>
                    <Text style={styles.Sistem_Gereksinimleri}>Screen Shots</Text>
                </View>

                <View style={styles.screenshots_container} >
                    <View style={styles.screenshots} >
                        <Image source={{ uri: gameList.screenshots[0].image }} style={styles.screenshotsimage} />
                    </View>
                    <View style={styles.screenshots} >
                        <Image source={{ uri: gameList.screenshots[1].image }} style={styles.screenshotsimage} />
                    </View>
                    <View style={styles.screenshots} >
                        <Image source={{ uri: gameList.screenshots[2].image }} style={styles.screenshotsimage} />
                    </View>
                </View>

                <TouchableOpacity style={styles.Web} onPress={() => Linking.openURL(gameList.game_url)}>
                    <Text style={styles.Web_Sitesi}>Oyunun Web Sitesi</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Game_Profili} onPress={() => Linking.openURL(gameList.freetogame_profile_url)}>
                    <Text style={styles.Free_to_Game}>Oyunun Free to Game Profili</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}
export default DetailCard;