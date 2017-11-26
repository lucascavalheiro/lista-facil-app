import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    height: Metrics.screenHeight - 170,
    padding: Metrics.marginVertical
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginBottom: 10
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
    color: Colors.red,
    fontWeight: '500'
  },
  oweYou: {
    color: Colors.green,
    fontWeight: '500'
  },
  usersContainer: {
    flex: 1,
  },
  bottomContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.white
  },
  total: {
    flex: 2
  },
  totalSpending: {
    color: Colors.primary,
    fontWeight: '600'
  },
  settleUp: {
    flex: 1
  },
})
