import React, { Component } from 'react'
import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Picker,
} from 'react-native'
import { Colors, Images } from '../../Themes/';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import firebase from 'react-native-firebase'

import Items from '../Items/Items.scene';
import Expenses from '../Expenses/Expenses.scene';
import DropdownModal from '../Shared/DropdownModal';
import Lists from '../Shared/ListsModal';
import NewUserModal from '../Shared/NewUserModal';

import styles from './Home.styles.js';
import {  } from './Home.actions';

const lists = [
  'Apartamento',
  'Recorrente',
  'Churrasco da firma',
  'Trabalho',
  'Apto 92',
]

const user = {}

class Home extends Component {
  state = {
    isListsModalOpen: false,
    isDropdownModalOpen: false,
    isNewUserModalOpen: false,
    dropdownList: [],
    dropdownPosition: 'left',
  }

  componentDidMount() {
    user = firebase.auth().currentUser
    console.log('user just logged in ', user);
  }

  openDropdownModal = (items, position) => {
    this.setState({
      isDropdownModalOpen: true,
      dropdownList: items,
      dropdownPosition: position
    })
  }

  toggleNewUserModal = (open) => {
    this.setState({ isNewUserModalOpen: open })
  }

  onCloseDropdown = () => {
    this.setState({
      isDropdownModalOpen: false
    })
  }

  onCloseLists = () => {
    this.setState({
      isListsModalOpen: false
    })
  }

  render () {
    const { isListsModalOpen, isDropdownModalOpen, isNewUserModalOpen, dropdownList, dropdownPosition } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity style={styles.listNameContainer} onPress={() => this.openDropdownModal(lists, 'left')}>
              <Text style={styles.listName}>Apartamento</Text>
              <Text style={styles.listArrow}>▼</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.openDropdownModal(['Listas', 'Configurações', 'Sair da conta'], 'right')}>
              <Image source={Images.iconMore} style={styles.iconMore} />
            </TouchableOpacity>
          </View>
          <View style={styles.usersList}>
            <TouchableOpacity onPress={() => this.toggleNewUserModal(true)}>
              <Image source={Images.iconPersonPlusLight} style={styles.iconPersonPlusLight} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollableTabView
          tabBarBackgroundColor={Colors.primary}
          tabBarActiveTextColor={Colors.white}
          tabBarInactiveTextColor={Colors.blueLight}
          tabBarTextStyle={styles.tabBarText}
          tabBarUnderlineStyle={styles.tabBarUnderline}>
          <ScrollView tabLabel='ITENS'>
            <Items />
          </ScrollView>
          <ScrollView tabLabel='DESPESAS'>
            <Expenses />
          </ScrollView>
        </ScrollableTabView>

        {isDropdownModalOpen &&
          <DropdownModal
            list={dropdownList}
            position={dropdownPosition}
            onClose={this.onCloseDropdown}
          />
        }

        {isListsModalOpen &&
          <Lists
            list={lists}
            onClose={this.onCloseLists}
          />
        }

        {isNewUserModalOpen &&
          <NewUserModal
            list={lists}
            onClose={() => this.toggleNewUserModal(false)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
