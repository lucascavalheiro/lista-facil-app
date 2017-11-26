import React, { Component } from 'react'
import {
  View,
  TextInput,
  ScrollView,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { ActionButton } from 'react-native-material-ui'
import { Colors, Images } from '../../Themes/'

import styles from './Items.styles.js'
import Item from '../Shared/Item'
import ItemModal from '../Shared/ItemModal'

class Items extends Component {
  state = {
    openItemModal: true,
    itemName: '',
    quantity: '1'
  }

  render () {
    const { openItemModal, itemName, quantity } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
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
        <View>
          <ScrollView>
            <Item />
            <Item />
          </ScrollView>
        </View>

        {openItemModal &&
          <ItemModal
            item={{quantity: '2', name: 'cacho de banana nanica'}}
            onClose={this.onCloseLists}
          />
        }
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
