import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Images } from '../../Themes/'

import styles from './OptionsModal.styles.js'

class OptionsModal extends Component {

  render () {
    const { user, list, onClose, onOptionsPress } = this.props

    return (
      <TouchableOpacity style={styles.background} onPress={onClose}>
        <View style={styles.container}>
          <View style={styles.userInfo}>
            <Image source={{uri: user.photoURL}} style={styles.userPicture}/>
            <Text style={styles.userName}>{user.displayName}</Text>
          </View>
          {list.map((item, i) =>
            <TouchableOpacity key={i} onPress={() => onOptionsPress(item)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    )
  }
}

OptionsModal.propTypes = {
  user: PropTypes.object,
  list: PropTypes.arrayOf(PropTypes.object),
  onClose: PropTypes.func,
  onOptionsPress: PropTypes.func
}

export default OptionsModal
