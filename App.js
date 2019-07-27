import { createStackNavigator, createAppContainer } from 'react-navigation'

import Loading from './src/screens/loading'
import Register from './src/screens/register'
import Login from './src/screens/login'
import Home from './src/screens/home'

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Loading: {screen: Loading},
  Register: {screen: Register},
  Home: {screen: Home},
},
{
  defaultNavigationOptions: {
    header: null,
  }
})

const App = createAppContainer(MainNavigator)

export default App