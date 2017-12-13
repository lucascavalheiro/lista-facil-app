import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  TouchableHighlight
} from 'react-native'
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
      name: 'Nova Lista',
      owner: this.props.user.uid,
      members: {
        [this.props.user.uid]: true
      }
    }, () => {
      this.onListCreated()
    })

    firebase.database().ref('members/' + this.props.user.uid + '/lists').update({
      [listKey]: true
    })
  }

  onListCreated = () => {
    this.props.updateLists()
  }

  onUpdateListName = (index) => {
    firebase.database().ref('lists/' + this.props.lists[index].id).update({
      name: this.state.listName
    }, () => {
      this.props.updateLists()
    })
  }

  onDeleteList = (index) => {
    const memberUpdate = 'members/' + this.props.user.uid + '/lists/' + this.props.lists[index].id
    const listUpdate = 'lists/' + this.props.lists[index].id
    let updates = {
      [memberUpdate]: null,
      [listUpdate]: null
    }

    firebase.database().ref().update(updates, ()=> { this.props.updateLists() })
  }

  onConclude = () => {
    if (this.state.indexToEdit != null) {
      this.onUpdateListName(this.state.indexToEdit)
    }

    this.props.onClose()
  }

  render () {
    const { listName, indexToEdit } = this.state
    const { lists, position, onClose, onItemClick, onCreateList } = this.props

    const listsToRender = lists.map((item, i) => {
      return (
        <View key={i} style={styles.itemContainer}>
          <TextInput
            style={styles.item}
            onFocus={() => this.setState({listName: item.name, indexToEdit: i})}
            onChangeText={(listName) => this.setState({listName})}
            onBlur={() => this.onUpdateListName(i)}
            value={indexToEdit === i ? listName : item.name}
            placeholder={item.name}
            underlineColorAndroid='rgb(48,63,159)'
            autoCorrect={false}
          />
          <TouchableOpacity onPress={() => this.onDeleteList(i)}>
            <Image source={Images.iconDelete} style={styles.deleteButton} />
          </TouchableOpacity>
        </View>
      )
    })

    return (
      <View style={styles.modalContainer}>
        <TouchableHighlight style={styles.background} onPress={onClose}>
          <View></View>
        </TouchableHighlight>
        <View style={styles.container}>
          <Text style={styles.title}>Listas</Text>
          <ScrollView style={styles.lists}>
            <TouchableOpacity onPress={this.onCreateList}>
              <Text style={styles.newList}>NOVA LISTA</Text>
            </TouchableOpacity>
            {listsToRender}
          </ScrollView>
          <View style={styles.bottom}>
            <Button onPress={this.onConclude} accent text="Ok" />
          </View>
        </View>
      </View>
    )
  }
}

ListsModal.propTypes = {
  user: PropTypes.object,
  lists: PropTypes.arrayOf(PropTypes.object),
  onClose: PropTypes.func,
  updateLists: PropTypes.func
}

export default ListsModal
