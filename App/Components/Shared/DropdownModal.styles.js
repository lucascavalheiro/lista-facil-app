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
    top: 20,
    paddingLeft: 15,
    paddingBottom: 25,
    elevation: 20
  },
  item: {
    color: Colors.primary,
    fontSize: Fonts.size.regular,
    fontWeight: '500',
    lineHeight: 50,
  }
})
