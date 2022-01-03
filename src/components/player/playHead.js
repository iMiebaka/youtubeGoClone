import React, {useState, useRef} from 'react';
import {View, Pressable, ImageBackground, TouchableOpacity} from 'react-native';
import {IMAGES, VIDEO} from '../blueprint';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Video } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';

// const shadow = {
//   padding: 20,
//   backgroundColor: '#d9d9d9',
//   shadowColor: '#000000',
//   shadowOpacity: 0.8,
//   shadowRadius: 2,
//   shadowOffset: {
//     height: 1,
//     width: 1,
//   },
// };
const PlayHead = () => {

  return (
    <View
      style={{
        height: 200,
        width: '100%',
      }}>
      <Video
        // ref={video}
        style={{flex: 1,
        }}
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      {/* <Pressable
        style={[
          {
            flex: 1,
            height: '100%',
            width1: '100%',
            position: 'absolute',
            //   flexDirection: 'row',
            //   alignItems: 'center',
            //   justifyContent: 'space-between',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // backgroundColor: 'black',
            opacity: videoOptions ? 1 : 0,
          },
        ]}
        onPress={() => {
          console.log('background ', videoOptions);
          setVideoOptions(vOption => !vOption);
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: 15,
            marginTop: 15,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginRight: 15,
              alignItems: 'center',
            }}>
            <Icon name="share" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="ellipsis-v" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 50,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{height: 'auto'}}
            onPress={() => {
              if (videoOptions) {
                console.log('play-btn');
              } else {
                setVideoOptions(vOption => !vOption);
              }
            }}>
            <Icon name="play" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </Pressable> */}
    </View>
  );
};

export default PlayHead;
