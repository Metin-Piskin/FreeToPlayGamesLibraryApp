import React from "react";
import { View, Text, FlatList } from "react-native";
import Config from 'react-native-config';
import axios from "axios";

import GameCard from "../../components/GameCard";
import fetchData from "../../Hooks";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const url = "https://www.freetogame.com/api/games";

const Libraryall = (props) => {
  const { gameList, loading, error } = fetchData(url);

  function onPressGame(id) {
    props.navigation.navigate('GamePages', { id })
  }


  if (loading) {
    return <Loading />;
  };

  if (error) {
    return (
      <View style={{ flex: 1 }}>
        <Error />
      </View>
    );
  };

  const renderGame = ({ item }) =>
    <GameCard
      library={item}
      onSelect={() => onPressGame(item.id)}
    />


  return (
    <FlatList
      data={gameList}
      renderItem={renderGame}
    />
  );
}
export default Libraryall;