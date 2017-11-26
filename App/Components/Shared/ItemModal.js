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

import styles from './ItemModal.styles.js'

class ItemModal extends Component {

  render () {
    const { item, onClose, onRemoveQuantity, onAddQuantity, onItemConclude } = this.props

    return (
      <TouchableHighlight style={styles.background} onPress={onClose}>
        <View style={styles.container}>
          <View style={styles.quantityContainer}>
            <Button
              onPress={onRemoveQuantity}
              raised
              text="-"
              style={{
                container: styles.removeButton,
                text: styles.quantityButton
              }}
            />
            <TextInput
              style={styles.quantity}
              value={item.quantity}
              underlineColorAndroid='rgba(0,0,0,0)'
              autoCorrect={false}
              keyboardType = 'numeric'
            />
            <Button
              onPress={onAddQuantity}
              raised
              text="+"
              style={{
                container: styles.addButton,
                text: styles.quantityButton
              }}
            />
          </View>
          <View style={styles.itemNameContainer}>
            <TextInput
              style={styles.itemName}
              value={item.name}
              underlineColorAndroid='rgba(0,0,0,0)'
              autoCorrect={false}
              keyboardType = 'numeric'
            />
          </View>
          <View style={styles.bottom}>
            <Button
              onPress={onClose}
              accent
              text="Cancelar"
              style={{ container: styles.cancelButton }}
            />
            <Button
              onPress={onItemConclude}
              accent
              text="Ok"
              style={{ container: styles.okButton }}
            />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

ItemModal.propTypes = {
  item: PropTypes.object,
  onItemConclude: PropTypes.func,
  onRemoveQuantity: PropTypes.func,
  onAddQuantity: PropTypes.func,
  onClose: PropTypes.func
}

export default ItemModal
