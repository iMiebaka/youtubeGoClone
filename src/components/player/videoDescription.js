import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

const VideoDescription = ({ bioInfo }) => {

  const toggleDescription = useSelector(
    (state) => state.descriptionToggleReducer
  );
  return (
    <View
      style={{
        height: toggleDescription ? "auto" : 0,
        backgroundColor: "white",
        // opacity: toggleDescription ? 1 : 0,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          paddingBottom: 2,
        }}
      >
        <Text style={{}}> {bioInfo.name}</Text>
        <FontAwesome
          style={{ paddingLeft: 5, paddingRight: 5 }}
          name="circle"
          size={5}
          color="grey"
        />
        <Text>{bioInfo.created_on}</Text>
      </View>
      <Text
        style={{
          padding: 10,
        }}
      >
        {bioInfo.description}
      </Text>
    </View>
  );
};

export default VideoDescription;
