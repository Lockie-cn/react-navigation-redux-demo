import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import store from './stote';

@connect(state => ({ nav: state.nav }))
class AppWithNavigationState extends Component {
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
