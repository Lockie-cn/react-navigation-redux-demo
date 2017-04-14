import React, { Component } from 'react';
import { BackAndroid } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import store from './stote';

@connect(state => ({ nav: state.nav }))
class AppWithNavigationState extends Component {

  handleBackAndroid() {
    console.log('点击了物理按键');
    return true;
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackAndroid);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAndroid);
  }

  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
