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
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userPicture: {
    height: 100,
    width: 100,
    borderRadius: 100
  },
  signupErrorContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  signupError: {
    fontSize: Fonts.size.regular,
    fontWeight: '600',
    color: Colors.red
  },
  signupBox: {
    flex: 3,
    marginTop: Metrics.baseMargin
  },
  button: {
    marginTop: Metrics.doubleSection
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
  },
  buttonLogin: {
    alignSelf: 'flex-end',
    marginTop: Metrics.baseMargin
  },
  buttonLoginText: {
    color: Colors.white
  }
})
