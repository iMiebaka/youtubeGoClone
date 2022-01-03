import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { changerDescription } from "../utilities/redux/actions";
import { FontAwesome } from "@expo/vector-icons";

const VideoDetails = ({ bioInfo }) => {
  const toggleDescription = useSelector(
    (state) => state.descriptionToggleReducer
  );

  const dispatch = useDispatch();

  return (
    <View
      style={{
        flexDirection: "column",
        margin: 10,
      }}
    >
      <View style={{ }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(changerDescription());
          }}
          style={{flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={{ color: "black" }}>{bioInfo.video_title}</Text>
          <FontAwesome
            name={toggleDescription ? "caret-up" : "caret-down"}
            size={20}
            color="black"
            style={{alignItems: "flex-end" }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{bioInfo.views}</Text>
        <Text>Data saver 4.6MB</Text>
      </View>
    </View>
  );
};

export default VideoDetails;
