import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './screens/Home';
import Transactions from './screens/Transactions';
import Purchase from './screens/Purchase';
import History from './screens/History';

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      // Home: {
      //   screen: Home
      // },
      Transactions: {
        screen: Transactions
      },
      Purchase: {
        screen: Purchase
      },
      History: {
        screen: History
      }
    },
    {
      initialRoute: Home,
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
        headerLeft: null
      }
    }
  )
)

export default AppContainer;