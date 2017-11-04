import React, { Component } from 'react'
import {
  View,
  TextInput,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import styles from './Items.styles.js'
import { ActionButton } from 'react-native-material-ui'

import { Colors, Images } from '../../Themes/'

class Items extends Component {
  state = {
    itemName: '',
    quantity: '1'
  }

  render () {
    const { itemName, quantity } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputQuantity}
            onChangeText={(quantity) => this.setState({quantity})}
            value={quantity}
            underlineColorAndroid='rgba(0,0,0,0)'
            autoCorrect={false}
            keyboardType = 'numeric'
          />
          <TextInput
            style={styles.inputItem}
            onChangeText={(itemName) => this.setState({itemName})}
            value={itemName}
            placeholder='Nome do item'
            underlineColorAndroid='rgba(0,0,0,0)'
            autoCorrect={false}
          />
        </View>
        <View style={styles.addButtonContainer}>
          <ActionButton style={{ container: styles.addButton }} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Items);
