import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight, ScrollView } from 'react-native'
import { Images } from '../../Themes/'
import { Button } from 'react-native-material-ui'

import styles from './ListsModal.styles.js'

class ListsModal extends Component {

  render () {
    const { list, position, onClose, onItemClick, onCreateList } = this.props

    return (
      <TouchableHighlight style={styles.background} onPress={onClose}>
        <View style={styles.container}>
          <Text style={styles.title}>Listas</Text>
          <ScrollView style={styles.lists}>
            <TouchableHighlight onPress={onCreateList}>
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
  list: PropTypes.arrayOf(PropTypes.string),
  onCreateList: PropTypes.func,
  onClose: PropTypes.func
}

export default ListsModal
