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
    width: 200,
    backgroundColor: Colors.white,
    paddingHorizontal: 35,
    paddingVertical: 35,
    elevation: 30
  },
  member: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    marginBottom: 20,
  },
  memberPhoto: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginRight: 15
  }
})
