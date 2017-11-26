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
    isItemModalOpen: false,
    newItemName: '',
    newItemQuantity: '1'
  }

  openItemModal = () => {
    this.setState({ isItemModalOpen: true })
  }

  onCheckItemCancel = () => {
    this.setState({ isItemModalOpen: false })
  }

  onItemConclude = () => {
    this.setState({ isItemModalOpen: false })
  }

  render () {
    const { isItemModalOpen, newItemName, newItemQuantity } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputQuantity}
              onChangeText={(newItemQuantity) => this.setState({newItemQuantity})}
              value={newItemQuantity}
              underlineColorAndroid='rgba(0,0,0,0)'
              autoCorrect={false}
              keyboardType = 'numeric'
            />
            <TextInput
              style={styles.inputItem}
              onChangeText={(newItemName) => this.setState({newItemName})}
              value={newItemName}
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
            <Item
              item={{quantity: '2', name: 'cacho de banana nanica'}}
              onCheckItem={this.openItemModal}
            />
          </ScrollView>
        </View>

        {isItemModalOpen &&
          <ItemModal
            item={{quantity: '2', name: 'cacho de banana nanica'}}
            onClose={this.onCheckItemCancel}
            onItemConclude={this.onItemConclude}
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
