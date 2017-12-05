import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native'

import styles from './UsersAssignModal.styles.js'

class UsersAssignModal extends Component {

  render () {
    const { item, onClose, onUserAssign, members } = this.props

    return (
      <TouchableHighlight style={styles.background} onPress={onClose}>
        <View style={styles.container}>
          <View style={styles.members}>
            {members && members.map((member, i) =>
              <TouchableOpacity key={i} style={styles.member} onPress={() => onUserAssign(member.email)}>
                <Image source={{uri: member.photoURL}} style={styles.memberPhoto} />
                <Text style={styles.memberName}>{member.name}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

UsersAssignModal.propTypes = {
  item: PropTypes.string,
  members: PropTypes.arrayOf(PropTypes.object),
  onClose: PropTypes.func,
  onUserAssign: PropTypes.func
}

export default UsersAssignModal
