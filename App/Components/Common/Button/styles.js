import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  button: {
    height: 36,
    width: 'auto',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: Metrics.doubleBaseMargin,
    backgroundColor: Colors.primary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  text: {
    alignSelf: 'center',
    fontSize: 14,
    color: Colors.snow,
    fontWeight: 'bold',
  }
})
