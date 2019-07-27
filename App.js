import { createStackNavigator, createAppContainer } from 'react-navigation'

import Loading from './src/screens/Loading'
import Register from './src/screens/Register'
import Login from './src/screens/Login'
import Home from './src/screens/Home'

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