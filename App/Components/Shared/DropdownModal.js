import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Images } from '../../Themes/'

import styles from './DropdownModal.styles.js'

class DropdownModal extends Component {

  render () {
    const { user, list, onClose, onItemPress } = this.props

    return (
      <TouchableOpacity style={styles.background} onPress={onClose}>
        <View style={styles.container}>
          {list.map((item, i) =>
            <TouchableOpacity key={i} onPress={() => onItemPress(item)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    )
  }
}

DropdownModal.propTypes = {
  user: PropTypes.object,
  list: PropTypes.arrayOf(PropTypes.object),
  onClose: PropTypes.func,
  onItemPress: PropTypes.func
}

export default DropdownModal
