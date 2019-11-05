import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './screens/Home';
import Transactions from './screens/Transactions';

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home
      },
      Transactions: {
        screen: Transactions
      },
    },
    {
      initialRoute: Home,
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      }
    }
  )
)

export default AppContainer;