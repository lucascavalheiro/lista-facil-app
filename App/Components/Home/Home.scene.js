import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Picker,
} from 'react-native'
import { Colors, Images } from '../../Themes/'
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import firebase from 'react-native-firebase'

import Items from '../Items/Items.scene'
import Expenses from '../Expenses/Expenses.scene'
import DropdownModal from '../Shared/DropdownModal'
import OptionsModal from '../Shared/OptionsModal'
import ListsModal from '../Shared/ListsModal'
import CheckedItemsModal from '../Shared/CheckedItemsModal'
import NewUserModal from '../Shared/NewUserModal'

import styles from './Home.styles.js'
import {  } from './Home.actions'

const user = {}

class Home extends Component {
  state = {
    isListsModalOpen: false,
    isOptionsModalOpen: false,
    isDropdownModalOpen: false,
    isCheckedItemsModalOpen: false,
    isNewUserModalOpen: false,
    optionsList: [],
    lists: [],
    currentList: null,
    members: []
  }

  componentDidMount() {
    user = firebase.auth().currentUser._user
    // console.log('user just logged in ', user)
    this.updateLists()
  }

  updateLists = () => {
    firebase.database().ref('members/' + user.uid + '/lists').once('value', (snapshot) => {
      let listIds = []
      let lists = []

      listIds = Object.keys(snapshot.val())
      listIds.map((id, index) => {
        firebase.database().ref('lists/' + id).once('value', (snapshot) => {
          let list = snapshot.val()
          if (list) {
            list.id = id
            if (lists[index] && lists[index].id === id) {
              lists[index] = list
            } else {
              lists = lists.concat(list)
            }
            this.setState({ lists: lists }, () => {
              this.loadListMembers()
            })
          } else {
            lists.splice(index, 1)
          }
        })
      })
    })
  }

  loadListMembers = () => {
    let currentList = this.state.currentList || this.state.lists[0]
    let membersList = []

    firebase.database().ref('lists/' + currentList.id + '/members').on('value', (snapshot) => {
      if (snapshot.val()) {
        Object.keys(snapshot.val()).map((memberId, i) => {
          firebase.database().ref('members/' + memberId).on('value', (snapshot) => {
            let member = snapshot.val()
            if (member) {
              member.id = memberId
              membersList = membersList.concat(member)
            }
            this.setState({
              members: membersList
            })
          })
        })
      }
    })
  }

  openOptionsModal = (items, position) => {
    this.setState({
      isOptionsModalOpen: true,
      optionsList: items,
    })
  }

  openDropdownModal = () => {
    this.setState({
      isDropdownModalOpen: true
    })
  }

  openListsModal = () => {
    this.setState({
      isListsModalOpen: true
    })
  }

  openCheckedItems = () => {
    this.setState({
      isCheckedItemsModalOpen: true
    })
  }

  toggleNewUserModal = (open) => {
    this.setState({ isNewUserModalOpen: open })
  }

  onCloseDropdown = () => {
    this.setState({
      isDropdownModalOpen: false
    })
    this.updateLists()
  }

  onCloseOptions = () => {
    this.setState({
      isOptionsModalOpen: false
    })
  }

  onCloseLists = () => {
    this.setState({
      isListsModalOpen: false
    })
    this.updateLists()
  }

  onCloseCheckedItemsModal = () => {
    this.setState({
      isCheckedItemsModalOpen: false
    })
    this.updateLists()
  }

  onDropdownModalItemPress = (item) => {
    const index = this.state.lists.findIndex(x => x.id == item.id)

    this.setState({
      currentList: this.state.lists[index],
      isDropdownModalOpen: false
    }, () => {
      this.updateLists()
    })
  }

  onOptionsPress = (item) => {
    this.setState({ isOptionsModalOpen: false })

    switch (item.name) {
      case 'Listas':
        this.openListsModal()
        break
      case 'Itens comprados':
        this.openCheckedItems()
        break
      case 'Sair da conta':
        firebase.auth().signOut()
          .then(() => {
            // console.log('User signed out successfully')
            this.props.navigation.navigate('Login')
          }).catch()
        break
      default:
        break
    }
  }

  render () {
    const {
      isListsModalOpen,
      isDropdownModalOpen,
      isOptionsModalOpen,
      isNewUserModalOpen,
      isCheckedItemsModalOpen,
      optionsList,
      dropdownPosition,
      lists,
      members
    } = this.state

    let { currentList } = this.state

    if (!currentList) {
      currentList = lists[0]
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              onPress={this.openDropdownModal}
              style={styles.listNameContainer}
            >
              <Text style={styles.listName}>{currentList ? currentList.name : 'Carregando...'}</Text>
              <Text style={styles.listArrow}>▼</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.openOptionsModal([{name: 'Listas'}, {name: 'Itens comprados'}, {name: 'Sair da conta'}], 'right')}
              style={styles.iconMoreContainer}
            >
              <Image source={Images.iconMore} style={styles.iconMore} />
            </TouchableOpacity>
          </View>
          <View style={styles.usersList}>
            <TouchableOpacity onPress={() => this.toggleNewUserModal(true)}>
              <Image source={Images.iconPersonPlusLight} style={styles.iconPersonPlusLight} />
            </TouchableOpacity>
            {members && members.map((member, i) =>
              <Image key={i} source={{uri: member.photoURL}} style={styles.userPhoto} />
            )}
          </View>
        </View>
        <ScrollableTabView
          tabBarBackgroundColor={Colors.primary}
          tabBarActiveTextColor={Colors.white}
          tabBarInactiveTextColor={Colors.blueLight}
          tabBarTextStyle={styles.tabBarText}
          tabBarUnderlineStyle={styles.tabBarUnderline}>
          <ScrollView tabLabel='ITENS'>
            <Items currentList={currentList} members={members} />
          </ScrollView>
          <ScrollView tabLabel='DESPESAS'>
            <Expenses user={user} currentList={currentList} members={members} />
          </ScrollView>
        </ScrollableTabView>

        {isDropdownModalOpen &&
          <DropdownModal
            list={lists}
            onClose={this.onCloseDropdown}
            onItemPress={this.onDropdownModalItemPress}
          />
        }

        {isOptionsModalOpen &&
          <OptionsModal
            user={user}
            list={optionsList}
            onClose={this.onCloseOptions}
            onOptionsPress={this.onOptionsPress}
          />
        }

        {isCheckedItemsModalOpen &&
          <CheckedItemsModal
            currentList={currentList}
            members={members}
            onClose={this.onCloseCheckedItemsModal}
          />
        }

        {isListsModalOpen &&
          <ListsModal
            user={user}
            lists={lists}
            onClose={this.onCloseLists}
            updateLists={this.updateLists}
          />
        }

        {isNewUserModalOpen &&
          <NewUserModal
            currentList={currentList}
            list={lists}
            onClose={() => this.toggleNewUserModal(false)}
          />
        }
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
