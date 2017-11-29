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
  loginErrorContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  loginError: {
    fontSize: Fonts.size.regular,
    fontWeight: '600',
    color: Colors.red
  },
  loginBox: {
    flex: 3,
    marginVertical: Metrics.doubleBaseMargin
  },
  button: {
    marginVertical: Metrics.doubleSection
  },
  loadingContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    height: 80
  }
})
