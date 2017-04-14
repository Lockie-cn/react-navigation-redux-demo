import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class navigation extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 15 }}>home 页面1</Text>
        <Button title={'跳转到home页面2'} onPress={() => { this.props.navigation.navigate('home2') }} />
      </View>
    );
  }
}