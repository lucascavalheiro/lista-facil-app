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
import { Colors, Images } from '../../Themes/'
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import firebase from 'react-native-firebase'

import Items from '../Items/Items.scene'
import Expenses from '../Expenses/Expenses.scene'
import DropdownModal from '../Shared/DropdownModal'
import Lists from '../Shared/ListsModal'
import NewUserModal from '../Shared/NewUserModal'

import styles from './Home.styles.js'
import {  } from './Home.actions'

const lists = []
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
    user = firebase.auth().currentUser._user
    // console.log('user just logged in ', user)

    const listIds = []
    firebase.database().ref('lists/-L-CzZja83g52YGFSacM').on('value', function(snapshot) {
      console.log('snap ', snapshot.val());
    })
    // firebase.database().ref('members/' + user.uid + '/lists').on('value', function(snapshot) {
    //   listIds.push(snapshot.val())
    //   console.log(listIds);
    // });
    // lists.push(snapshot.val())
    // console.log('lists ', lists);

    // const ref = firebase.database().ref('lists').push()
    // const key = ref.key
    //
    // ref.set({id: key})
    //   .then(() => {
    //     console.log(key);
    //   }).catch()
    //
    // firebase.database()
    //   .ref('lists')
    //   .set({
    //     [key]: {
    //       name: 'Nova Lista'
    //     }
    //   });
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

  onDropdownModalItemPress = (item) => {
    this.setState({ isDropdownModalOpen: false })

    switch (item) {
      case 'Listas':
        this.setState({ isListsModalOpen: true })
        break
      case 'Sair da conta':
        firebase.auth().signOut()
          .then(() => {
            console.log('User signed out successfully')
            this.props.navigation.navigate('Login')
          }).catch()
        break
      default:
        break
    }
  }

  render () {
    const { isListsModalOpen, isDropdownModalOpen, isNewUserModalOpen, dropdownList, dropdownPosition } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              onPress={() => this.openDropdownModal(lists, 'left')}
              style={styles.listNameContainer}
            >
              <Text style={styles.listName}>{lists[0]}</Text>
              <Text style={styles.listArrow}>▼</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.openDropdownModal(['Listas', 'Sair da conta'], 'right')}
              style={styles.iconMoreContainer}
            >
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
            user={user}
            list={dropdownList}
            position={dropdownPosition}
            onClose={this.onCloseDropdown}
            onItemPress={this.onDropdownModalItemPress}
          />
        }

        {isListsModalOpen &&
          <Lists
            user={user}
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
  return {}
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
