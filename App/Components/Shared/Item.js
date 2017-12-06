import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, TouchableOpacity } from 'react-native'
import CheckBox from 'react-native-check-box'
import { Colors, Images } from '../../Themes/'
import firebase from 'react-native-firebase'

import styles from './Item.styles.js'


class Item extends Component {
  state = {
    memberPhoto: ''
  }

  componentDidMount() {
    firebase.database().ref('items/' + this.props.currentListId).on('value', (snapshot) => {
      firebase.database().ref('members').on('value', (snapshot) => {
        Object.keys(snapshot.val()).map((member, i) => {
          if (this.props.item.assigned != '' && snapshot.val()[member].email === this.props.item.assigned) {
            this.setState({ memberPhoto: snapshot.val()[member].photoURL })
          }
        })
      })
    })
  }

  render () {
    const { memberPhoto } = this.state
    const { item, onCheckItem, hide, onAssignPress, assignDisabled } = this.props

    if (hide) {
      return null
    }

    return (
      <View style={styles.container}>
        <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={onCheckItem}
            isChecked={item.completed}
            rightText={item.name}
            rightTextStyle={{color: Colors.black}}
            checkBoxColor={Colors.gray}
        />
        <TouchableOpacity onPress={assignDisabled ? null : () => onAssignPress(item)}>
          <Image
            style={styles.photo}
            source={memberPhoto ? {uri: memberPhoto} : Images.iconPersonPlus}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object,
  hide: PropTypes.bool,
  onCheckItem: PropTypes.func,
  onAssignPress: PropTypes.func,
  currentListId: PropTypes.string,
  assignDisabled: PropTypes.bool
}

export default Item
