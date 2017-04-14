import { combineReducers } from 'redux';
import navReducer from './navReducer';

const appReducer = combineReducers({
  nav: navReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;