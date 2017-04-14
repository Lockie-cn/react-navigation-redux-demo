import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import Tab from '../Tab';

export default class navigation extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 15 }}>home首页</Text>
        <Button title={'跳转到home页面1'} onPress={() => { this.props.navigation.navigate('home1') }} />
        <Tab />
      </View>
    );
  }
}