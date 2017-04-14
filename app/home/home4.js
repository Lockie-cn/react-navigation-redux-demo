import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux';

@connect(state => ({ nav: state.nav }))
export default class navigation extends Component {
  static navigationOptions = {
    title: 'Home4',
  }

  //pop只是提供思路...具体严密逻辑实现自行实现
  pop(index = 1) {
    const { index: stateIndex, routes } = this.props.nav;
    const routesIndex = stateIndex - index + 1;
    const key = routes[routesIndex].key;
    this.props.navigation.goBack(key);
  }

  //popTo只是提供思路...具体严密逻辑实现自行实现
  popTo(routeName) {
    const { index, routes } = this.props.nav;
    let routesIndex;
    for (let i in routes) {
      const route = routes[i];
      if (route.routeName === routeName) {
        routesIndex = parseInt(i) + 1;
        break;
      }
    };
    const key = routes[routesIndex].key;
    this.props.navigation.goBack(key);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 15 }}>home 页面4</Text>
        <Button title={'pop 1 page'} onPress={() => { this.pop() }} />
        <Button title={'pop 2 page'} onPress={() => { this.pop(2) }} />
        <Button title={'pop 3 page'} onPress={() => { this.pop(3) }} />
        <Button title={'popTo home3'} onPress={() => { this.popTo('home3') }} />
        <Button title={'popTo home2'} onPress={() => { this.popTo('home2') }} />
        <Button title={'popTo home1'} onPress={() => { this.popTo('home1') }} />
        <Button title={'popTo homeIndex'} onPress={() => { this.popTo('homeIndex') }} />
      </View>
    );
  }
}
