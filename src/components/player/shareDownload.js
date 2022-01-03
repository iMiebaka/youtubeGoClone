import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
const ShareDownload = ({videoDownloaded}) => {

  const [videoDownloaded_, setVideoDownloaded_] = useState(videoDownloaded)
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '45%',
          height: 45,
          justifyContent: 'center',
          borderRadius: 2,
          borderWidth: 1,
          borderColor: 'blue',
          backgroundColor: '#0000',
        }}>
        <FontAwesome
          name="share"
          size={15}
          color="blue"
          style={{marginRight: 5, marginTop: 3}}
        />

        <Text
          style={{
            fontWeight: 'bold',
            color: '#4800D8',
          }}>
          SHARE
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '45%',
          height: 45,
          justifyContent: 'center',
          borderRadius: 2,
          borderWidth: 1,
          borderColor: 'blue',
          backgroundColor: videoDownloaded_ ? '#0000' : '#4800D8', 
       }}
       onPress={() => setVideoDownloaded_(!videoDownloaded_)}
       >
        <FontAwesome
          name={videoDownloaded_ ? 'check' : 'download'}
          size={15}
          color={videoDownloaded_ ? 'blue' : 'white'}
          style={{marginRight: 5, marginTop: 3}}
        />
        <Text
          style={{
            fontWeight: 'bold',
            color: videoDownloaded_ ? 'blue' : 'white',
            // color: 'white',
          }}>
          {videoDownloaded_ ? 'DOWNLOADED' : 'DOWNLOAD'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShareDownload;
