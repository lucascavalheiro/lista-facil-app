import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userName: {
    marginLeft: 20
  },
  balanceContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  oweYou: {
    fontSize: Fonts.size.small,
    color: Colors.green,
    fontWeight: '500'
  },
  oweYouValue: {
    color: Colors.green,
    fontWeight: '500'
  },
  youOwe: {
    fontSize: Fonts.size.small,
    color: Colors.red,
    fontWeight: '500'
  },
  youOweValue: {
    color: Colors.red,
    fontWeight: '500'
  }
})
