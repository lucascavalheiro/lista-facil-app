import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: Metrics.marginVertical
  },
  inputContainer: {
    flex: 5,
    justifyContent: 'center',
    height: 56
  },
  input: {
    height: 56,
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 3,
    marginRight: Metrics.marginHorizontal
  },
  addButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    width: 56,
    height: 56,
    marginTop: Metrics.doubleBaseMargin,

  },
  addButton: {
    flex: 0,
    backgroundColor: Colors.primary,
    marginRight: -20,
    width: 56,
    height: 56,
  }
})
