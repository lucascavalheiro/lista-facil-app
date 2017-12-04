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
    const listKey = ref.key

    firebase.database().ref('lists/' + listKey).update({
      name: 'Outra Lista',
      owner: this.props.user.uid,
      members: {
        [this.props.user.uid]: true
      }
    })

    firebase.database().ref('members/' + this.props.user.uid + '/lists').update({
      [listKey]: true
    })
  }

  render () {
    const { lists, position, onClose, onItemClick, onCreateList } = this.props

    return (
      <TouchableHighlight style={styles.background} onPress={onClose}>
        <View style={styles.container}>
          <Text style={styles.title}>Listas</Text>
          <ScrollView style={styles.lists}>
            <TouchableHighlight onPress={this.onCreateList}>
              <Text style={styles.newList}>NOVA LISTA</Text>
            </TouchableHighlight>
            {lists.map((item, i) =>
              <TouchableHighlight key={i}>
                <Text style={styles.item}>{item.name}</Text>
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
  lists: PropTypes.arrayOf(PropTypes.object),
  onClose: PropTypes.func
}

export default ListsModal
