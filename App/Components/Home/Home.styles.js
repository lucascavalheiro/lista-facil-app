import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.statusBar,
    backgroundColor: Colors.background
  },
  header: {
    backgroundColor: Colors.secondary,
    // backgroundColor: Colors.secondary,
    height: 230,
    // box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    position: 'relative',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: -18,
    right: Metrics.doubleBaseMargin,
  }
})
