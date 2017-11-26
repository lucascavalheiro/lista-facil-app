import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    height: Metrics.screenHeight - 180,
    padding: Metrics.marginVertical
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  inputContainer: {
    flex: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    height: 46
  },
  inputQuantity: {
    flex: 1,
    height: 46,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 3,
    marginRight: Metrics.baseMargin,
    fontSize: 18,
    textAlign: 'center',
    padding: Metrics.baseMargin
  },
  inputItem: {
    flex: 5,
    height: 46,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 3,
    marginRight: Metrics.baseMargin,
    fontSize: 18,
    paddingHorizontal: 15
  },
  addButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    width: 46,
    height: 46,
    marginTop: Metrics.doubleBaseMargin,

  },
  addButton: {
    flex: 0,
    backgroundColor: Colors.accent,
    marginRight: -20,
    width: 46,
    height: 46,
  }
})
