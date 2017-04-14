import { StackNavigator } from 'react-navigation';

import homeIndex from './home/homeIndex';
import home1 from './home/home1';
import home2 from './home/home2';
import home3 from './home/home3';
import home4 from './home/home4';

import billIndex from './bill/billIndex';
import bill1 from './bill/bill1';
import bill2 from './bill/bill2';

import mineIndex from './mine/mineIndex';
import mine1 from './mine/mine1';

const AppNavigator = StackNavigator({
  homeIndex: {
    screen: homeIndex,
    navigationOptions: {
      headerVisible: false
    }
  },
  billIndex: {
    screen: billIndex,
  },
  mineIndex: {
    screen: mineIndex,
  },
  home1: {
    screen: home1,
  },
  home2: {
    screen: home2,
  },
  home3: {
    screen: home3,
  },
  home4: {
    screen: home4,
  },
  bill1: {
    screen: bill1,
  },
  bill2: {
    screen: bill2,
  },
  mine1: {
    screen: mine1,
  },
}, {
    navigationOptions: {
      header: {
        backTitle: null
      },
      title: (props) => { return props.state.routeName }
    },
    headerMode: 'screen'
  }
);

export default AppNavigator;