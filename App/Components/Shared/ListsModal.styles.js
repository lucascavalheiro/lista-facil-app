import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: Metrics.screenWidth - 60,
    height: Metrics.screenHeight / 2,
    backgroundColor: Colors.white,
    paddingHorizontal: 25,
    elevation: 20
  },
  lists: {
    paddingBottom: 50,
  },
  title: {
    color: Colors.primary,
    fontSize: Fonts.size.big,
    fontWeight: '500',
    lineHeight: 50,
    backgroundColor: Colors.white
  },
  newList: {
    color: Colors.gray,
    fontSize: Fonts.size.regular,
    fontWeight: '500',
    lineHeight: 50,
  },
  item: {
    width: Metrics.screenWidth - 170,
    color: Colors.primary,
    fontSize: Fonts.size.regular,
    fontWeight: '500',
    lineHeight: 50,
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 45,
    backgroundColor: 'white'
  }
})
