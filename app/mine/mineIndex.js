import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Tab from '../Tab';

export default class navigation extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 15 }}>
          mine首页
        </Text>
        <Tab/>
      </View>
    );
  }
}