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
    justifyContent: 'center',
  },
  container: {
    width: Metrics.screenWidth - 60,
    height: 200,
    backgroundColor: Colors.white,
    paddingHorizontal: 25,
    paddingTop: 25,
    elevation: 30
  },
  description: {
    fontSize: Fonts.size.regular,
    color: Colors.primary
  },
  userEmail: {
    fontSize: Fonts.size.regular,
    color: Colors.primary,
    marginTop: 10
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 45,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row'
  },
  actionButton: {
    flex: 1
  }
})
