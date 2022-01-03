import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';

const MoreHeader = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        height: 'auto'
      }}>
      <Text style={{fontSize: 12, fontWeight: '400'}}>More Videos</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 12, fontWeight: '400'}}>Autoplay</Text>
        <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
     
      </View>
    </View>
  );
};

export default MoreHeader;
