import { handleActions } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import AppNavigator from '../AppNavigator';

const initialNavState = {
  index: 0,
  routes: [
    {
      key: 'homeIndex',
      routeName: 'homeIndex',
    }
  ],
}

export default handleActions({
  'Navigation/NAVIGATE': (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState;
  },
  'Navigation/BACK': (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState;
  },
  'Navigation/RESET': (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState;
  }
}, initialNavState);
