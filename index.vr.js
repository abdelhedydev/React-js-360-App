import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class pano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('test2.jpg')}/>

      </View>
    );
  }
};

AppRegistry.registerComponent('pano', () => pano);
