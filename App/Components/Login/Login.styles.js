import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: Metrics.statusBar,
    justifyContent: 'center',
  },
  loginBox: {
    marginHorizontal: Metrics.doubleBaseMargin,
    paddingVertical: Metrics.doubleBaseMargin,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 4,
    backgroundColor: Colors.secondary,
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: Metrics.doubleBaseMargin,
    marginHorizontal: Metrics.doubleBaseMargin
  }
})
