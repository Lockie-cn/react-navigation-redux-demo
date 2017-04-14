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
    console.log(this.props);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 15 }}>账单页面2</Text>
        <Button title={'跳转home 页面2'} onPress={() => { this.props.navigation.navigate('home2') }} />
      </View>
    );
  }
}