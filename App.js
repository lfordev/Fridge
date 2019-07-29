import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from './src/screens/Home'
import Loading from './src/screens/Loading'
import Register from './src/screens/Register'
import Login from './src/screens/Login'

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Login: {screen: Login},
  Loading: {screen: Loading},
  Register: {screen: Register},
},
{
  defaultNavigationOptions: {
    header: null,
  }
})

const App = createAppContainer(MainNavigator)

export default App