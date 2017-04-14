import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class navigation extends Component {
  onpress() {
    console.log('---------');
    // this.props.navigation.dispatch(NavigationActions.back({ key: 'Init' }))
    this.props.navigation.goBack();
  }

  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 15 }}>home 页面3</Text>
        <Button title={'跳转到home页面4'} onPress={() => this.props.navigation.navigate('home4')} />
        <Button title={'跳转Bill页面2'} onPress={() => this.props.navigation.navigate('bill2')} />
      </View>
    );
  }
}