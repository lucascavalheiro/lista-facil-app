import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  container: {
    flex: 1,
    width: 180,
    backgroundColor: Colors.white,
    position: 'absolute',
    right: 10,
    top: 20,
    paddingBottom: 25,
    elevation: 20
  },
  userInfo: {
    flex: 1,
    alignItems: 'center',
    width: 180,
    height: 30,
    paddingTop: 15,
    paddingBottom: 40
  },
  userPicture: {
    height: 25,
    width: 25,
    borderRadius: 25
  },
  userName: {
    fontSize: Fonts.size.small,
    fontWeight: '500',
    lineHeight: 25,
  },
  item: {
    color: Colors.primary,
    fontSize: Fonts.size.regular,
    fontWeight: '500',
    lineHeight: 50,
    paddingHorizontal: 15,
  }
})
