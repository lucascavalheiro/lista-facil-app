import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import { Images } from '../../Themes/'

import styles from './DropdownModal.styles.js'

class DropdownModal extends Component {

  render () {
    const { user, list, position, onClose, onItemClick } = this.props

    return (
      <TouchableHighlight style={styles.background} onPress={onClose}>
        <View style={[styles.container, {[position]: 10}]}>
          {position === 'right' &&
            <View style={styles.userInfo}>
              <Image source={{uri: user.photoURL}} style={styles.userPicture}/>
              <Text style={styles.userName}>{user.displayName}</Text>
            </View>
          }
          {list.map((item, i) =>
            <TouchableHighlight key={i}>
              <Text style={styles.item}>{item}</Text>
            </TouchableHighlight>
          )}
        </View>
      </TouchableHighlight>
    )
  }
}

DropdownModal.propTypes = {
  user: PropTypes.object,
  list: PropTypes.arrayOf(PropTypes.string),
  position: PropTypes.string,
  onClose: PropTypes.func
}

export default DropdownModal
