import { StackNavigator } from 'react-navigation'
import Login from '../Components/Login/Login.scene.js'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Login: { screen: Login }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Login',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
