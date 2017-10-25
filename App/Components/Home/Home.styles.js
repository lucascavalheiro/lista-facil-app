import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  header: {
    backgroundColor: Colors.secondary,
    height: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    position: 'relative',
    paddingTop: Metrics.marginVertical,
    paddingHorizontal: Metrics.marginHorizontal
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginBottom: Metrics.marginVertical
  },
  listNameContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  listName: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600'
  },
  listArrow: {
    color: Colors.white,
    marginLeft: Metrics.smallMargin
  },
  tabBarText: {
    fontSize: 16
  },
  tabBarUnderline: {
    backgroundColor: Colors.primary
  }
})
