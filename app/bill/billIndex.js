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
        <Text style={{ fontSize: 15 }}>账单首页</Text>
        <Button title={'跳转bill页面2'} onPress={() => { this.props.navigation.navigate('bill1') }} />
        <Tab />
      </View>
    );
  }
}