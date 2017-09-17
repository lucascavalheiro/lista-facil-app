import { StackNavigator } from 'react-navigation'
import Login from '../Components/Login/Login.scene.js'
import Home from '../Components/Home/Home.scene.js'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Login',
})

export default PrimaryNav
