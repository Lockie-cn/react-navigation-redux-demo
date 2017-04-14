import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux';

@connect()
export default class Tab extends Component {
  resetAction(routerName) {
    console.log(this.props);
    const action = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: routerName })
      ]
    });
    this.props.dispatch(action);
  }

  render() {
    return (
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 45, flexDirection: 'row', backgroundColor: '#8b8b8b' }}>
        <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => { this.resetAction('homeIndex') }}>
          <Text>首页</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => { this.resetAction('billIndex') }}>
          <Text>账单</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => { this.resetAction('mineIndex') }}>
          <Text>我的</Text>
        </TouchableOpacity>
      </View>
    );
  }
}