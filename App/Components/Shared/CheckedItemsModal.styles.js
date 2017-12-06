import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
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
    height: Metrics.screenHeight / 1.6,
    backgroundColor: Colors.white,
    paddingHorizontal: 25,
    paddingVertical: 40,
    elevation: 20
  },
  title: {
    fontSize: 20,
    color: Colors.primary
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
