import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight, ScrollView } from 'react-native'
import { Images } from '../../Themes/'
import { Button } from 'react-native-material-ui'
import firebase from 'react-native-firebase'

import styles from './ListsModal.styles.js'

class ListsModal extends Component {
  onCreateList = () => {
    const ref = firebase.database().ref('lists').push()
    const key = ref.key

    firebase.database()
      .ref('lists')
      .update({
        [key]: {
          name: 'Lista Nova',
          owner: this.props.user.uid,
          members: {
            [this.props.user.uid]: true
          }
        }
      });
  }

  render () {
    const { list, position, onClose, onItemClick, onCreateList } = this.props

    return (
      <TouchableHighlight style={styles.background} onPress={onClose}>
        <View style={styles.container}>
          <Text style={styles.title}>Listas</Text>
          <ScrollView style={styles.lists}>
            <TouchableHighlight onPress={this.onCreateList}>
              <Text style={styles.newList}>NOVA LISTA</Text>
            </TouchableHighlight>
            {list.map((item, i) =>
              <TouchableHighlight key={i}>
                <Text style={styles.item}>{item}</Text>
              </TouchableHighlight>
            )}
          </ScrollView>
          <View style={styles.bottom}>
            <Button onPress={onClose} accent text="Ok" />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

ListsModal.propTypes = {
  user: PropTypes.object,
  list: PropTypes.arrayOf(PropTypes.string),
  onClose: PropTypes.func
}

export default ListsModal
