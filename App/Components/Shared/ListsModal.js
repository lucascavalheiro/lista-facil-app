import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight, ScrollView, TextInput } from 'react-native'
import { Images } from '../../Themes/'
import { Button } from 'react-native-material-ui'
import firebase from 'react-native-firebase'

import styles from './ListsModal.styles.js'

class ListsModal extends Component {
  state = {
    listName: '',
    indexToEdit: null
  }

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

  updateListName = (index) => {
    firebase.database().ref('lists/' + this.props.lists[index].id).update({
      name: this.state.listName
    })
  }

  render () {
    const { listName, indexToEdit } = this.state
    const { lists, position, onClose, onItemClick, onCreateList } = this.props

    const listsToRender = lists.map((item, i) => {
      return (
        <TouchableHighlight key={i}>
          <TextInput
            style={styles.item}
            onFocus={() => this.setState({listName: item.name, indexToEdit: i})}
            onChangeText={(listName) => this.setState({listName})}
            onBlur={() => this.updateListName(i)}
            value={indexToEdit === i ? listName : item.name}
            placeholder={item.name}
            underlineColorAndroid='rgb(48,63,159)'
            autoCorrect={false}
          />
        </TouchableHighlight>
      )
    })

    return (
      <TouchableHighlight style={styles.background} onPress={onClose}>
        <View style={styles.container}>
          <Text style={styles.title}>Listas</Text>
          <ScrollView style={styles.lists}>
            <TouchableHighlight onPress={this.onCreateList}>
              <Text style={styles.newList}>NOVA LISTA</Text>
            </TouchableHighlight>
            {listsToRender}
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
