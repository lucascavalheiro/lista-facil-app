import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.statusBar,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBox: {
    flex: 3,
    marginVertical: Metrics.doubleBaseMargin
  },
  button: {
    marginVertical: Metrics.doubleSection
  }
})
