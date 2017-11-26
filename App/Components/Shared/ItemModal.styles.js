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
    elevation: 30
  },
  quantityContainer: {
    flexDirection: 'row',
    paddingTop: 20
  },
  removeButton: {
    flex: 1,
    marginLeft: 20
  },
  addButton: {
    flex: 1,
    marginRight: 20,
  },
  quantity: {
    flex: 2,
    height: 40,
    textAlign: 'center',
    fontSize: Fonts.size.big,
    color: Colors.primary
  },
  quantityButton: {
    fontSize: 30,
    fontWeight: '200',
    color: Colors.primary
  },
  itemNameContainer: {
    height: 80,
    paddingBottom: 10
  },
  itemName: {
    flex: 1,
    textAlign: 'center',
    fontSize: Fonts.size.regular,
    fontWeight: '600',
    color: Colors.primary
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
  cancelButton: {
    flex: 1
  },
  okButton: {
    flex: 1
  }
})
