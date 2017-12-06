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
    height: Metrics.screenHeight / 2,
    backgroundColor: Colors.white,
    paddingHorizontal: 25,
    elevation: 20
  },
  lists: {
    marginBottom: 50,
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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  item: {
    width: Metrics.screenWidth - 170,
    color: Colors.primary,
    fontSize: Fonts.size.regular,
    fontWeight: '500',
    lineHeight: 50,
  },
  buttonDelete: {
    height: 25,
    width: 25,
    borderRadius: 25,
    marginRight: 30
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
