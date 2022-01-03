import React from 'react';
import {SafeAreaView} from 'react-native';
import VideoPlay from './src/screens/videoPlay/videoPlay';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducer from './src/components/utilities/redux/reducers';

const store = createStore(allReducer);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <VideoPlay />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
