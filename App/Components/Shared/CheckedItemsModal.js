import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  TextInput
} from 'react-native'
import { Images } from '../../Themes/'
import { Button } from 'react-native-material-ui'
import Item from './Item'
import firebase from 'react-native-firebase'

import styles from './CheckedItemsModal.styles.js'


class CheckedItemsModal extends Component {
  state = {
    items: [],
  }

  componentDidMount() {
    firebase.database().ref('items/' + this.props.currentList.id).on('value', (snapshot) => {
      this.setState({ items: snapshot.val() })
    })
  }

  onItemChecked = (item) => {
    firebase.database()
      .ref('items/' + this.props.currentList.id + '/' + item)
      .update({
        completed: false
      })
  }

  render () {
    const { items } = this.state
    const { currentList, members, onClose } = this.props
    console.log('component');

    return (
      <View style={styles.modalContainer}>
        <TouchableHighlight style={styles.background} onPress={onClose}>
          <View></View>
        </TouchableHighlight>
        <View style={styles.container}>
          <Text style={styles.title}>Itens já comprados:</Text>
          <ScrollView>
            {items && Object.keys(items).map((item, i) =>
              <Item
                key={i}
                currentListId={currentList.id}
                item={items[item]}
                hide={!items[item].completed}
                onCheckItem={() => this.onItemChecked(item)}
                assignDisabled
              />
            )}
          </ScrollView>
          <View style={styles.bottom}>
            <Button onPress={onClose} accent text="Ok" />
          </View>
        </View>
      </View>
    )
  }
}

CheckedItemsModal.propTypes = {
  currentList: PropTypes.object,
  members: PropTypes.arrayOf(PropTypes.object),
  onClose: PropTypes.func
}

export default CheckedItemsModal
