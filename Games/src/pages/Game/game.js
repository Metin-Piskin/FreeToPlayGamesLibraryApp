import React from "react";
import { View } from "react-native";

import fetchData from "../../Hooks";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import DetailCard from "../../components/DetailCard";

const urlgame = "https://www.freetogame.com/api/game?id=";

function Detail(props) {
  const { id } = props.route.params;
  const { gameList, loading, error } = fetchData(urlgame + id);

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

  return (
    <DetailCard gameList={gameList} />
  );
}
export default Detail;