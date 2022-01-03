import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const AuthorCTA = ({bioInfo, cover_image}) => {
  const [subscribed, setSubscribed] = useState(subscribed)

  return (
    <View
      style={{
        width: '100%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginTop: 10,
      }}>
      <View
        style={{
          marginRight: 10,
          marginLeft: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginBottom: 15,
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              style={{width: 40, height: 40, borderRadius: 100}}
              source={cover_image}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 15, color: 'black'}}>{bioInfo.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 13,
                  }}>
                  {bioInfo.subscriber_count}
                </Text>
                <Text style={{marginLeft: 3, fontSize: 13}}>subscribers</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            setSubscribed(!subscribed)
          }}>
          <FontAwesome
            style={{marginTop: 2}}
            name="youtube-play"
            size={15}
            color={subscribed ? 'grey' : 'red'}
          />
          <Text
            style={{
              color: subscribed ? 'grey' : 'red',
              borderRadius: 4,
              paddingLeft: 4,
              fontWeight: '500',
              textTransform: 'uppercase',
              fontSize: 12,
            }}>
            {subscribed ? 'subcribed' : 'Subscribe'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthorCTA;
