import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
import firebase from 'react-native-firebase'

class Items extends Component {
  state = {
    items: [],
    isItemModalOpen: false,
    newItemName: '',
    newItemQuantity: '1'
  }

  componentWillReceiveProps(nextProps) {
    firebase.database().ref('items/' + nextProps.currentList.id).on('value', (snapshot) => {
      this.setState({ items: snapshot.val() })
    })
  }

  openItemModal = () => {
    this.setState({ isItemModalOpen: true })
  }

  onCheckItemCancel = () => {
    this.setState({ isItemModalOpen: false })
  }


  onItemCreate = () => {
    const itemRef = firebase.database().ref().push()

    firebase.database()
      .ref('items/' + this.props.currentList.id)
      .update({
        [itemRef]: {
          assigned: "",
          completed: false,
          name: this.state.newItemName
        }
      })
  }

  onItemConclude = (item) => {
    firebase.database()
      .ref('items/' + this.props.currentList.id + '/' + item)
      .update({
        completed: true
      })
  }

  render () {
    const { isItemModalOpen, newItemName, items } = this.state
    const { currentList } = this.props



    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.inputContainer}>
            {false && <TextInput
              style={styles.inputQuantity}
              onChangeText={(newItemQuantity) => this.setState({newItemQuantity})}
              value={newItemQuantity}
              underlineColorAndroid='rgba(0,0,0,0)'
              autoCorrect={false}
              keyboardType = 'numeric'
            />}
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
            <ActionButton
              onPress={this.onItemCreate}
              disabled={newItemName === ''}
              style={{ container: styles.addButton }}
            />
          </View>
        </View>
        <View>
          <ScrollView>
            {items && Object.keys(items).map((item, i) =>
              <Item
                key={i}
                item={{ name: items[item].name }}
                hide={items[item].completed}
                onCheckItem={() => this.onItemConclude(item)}
              />
            )}
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

Items.propTypes = {
  currentList: PropTypes.object
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Items);
