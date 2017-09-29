import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  header: {
    backgroundColor: Colors.secondary,
    height: 230,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    position: 'relative',
  },
  select: {
    color: Colors.white,
    width: 160
  },
  button: {
    position: 'absolute',
    top: 210,
    backgroundColor: Colors.primary,
    right: Metrics.doubleBaseMargin,
    width: 120
  },
  buttonText: {
    color: Colors.white
  }
})
