import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {IMAGES, DIMENSIONS} from '../blueprint';
import { FontAwesome } from '@expo/vector-icons';


const VideoRecommdation = props => {
  const {last} = props;
  return (
    <View
      style={{
        // height: 120,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        marginBottom: last ? 40 : 0,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View style={{
          flexDirection: 'row',
        }}>
          <View style={{height: 90, width: 140}}>
            <ImageBackground
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'cover',
              }}
              source={IMAGES.cover2}
            />
            <Text
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: '#2C2C2C',
                color: '#ffff',
                fontWeight: '500',
              }}>
              7:24
            </Text>
          </View>
          <View style={{marginLeft: 7}}>
            <Text
              style={{
                fontSize: 13,
                color: '#000',
                maxWidth: DIMENSIONS.phoneWidth / 2,
              }}>
              Most sites have a "hidden" link, and you should too!
            </Text>
            <Text style={{fontSize: 13}}>Kelvin Powell</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13}}>143K views</Text>
              <Text style={{marginLeft: 5, fontSize: 13}}>4 days ago</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          {/* <Image
            style={{marginTop: 15, width: 5, height: 17}}
            source={ICONS.dot}
          /> */}
          <FontAwesome name="ellipsis-v" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoRecommdation;
