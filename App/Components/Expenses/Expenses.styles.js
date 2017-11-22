import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
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
    height: 56
  },
  inputQuantity: {
    flex: 1,
    height: 56,
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 3,
    marginRight: Metrics.baseMargin,
    fontSize: 18,
    textAlign: 'center',
    padding: Metrics.baseMargin
  },
  inputItem: {
    flex: 5,
    height: 56,
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 3,
    marginRight: Metrics.baseMargin,
    fontSize: 18,
    paddingHorizontal: 15
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
  },
  owner: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  totalBalanceContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 20
  },
  totalBalance: {
    marginTop: 5
  },
  oweContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  youOwe: {
    color: Colors.red
  },
  oweYou: {
    color: Colors.green
  }
})
