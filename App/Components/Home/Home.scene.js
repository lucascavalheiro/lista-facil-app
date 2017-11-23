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

import Items from '../Items/Items.scene';
import Expenses from '../Expenses/Expenses.scene';
import DropdownModal from '../Shared/DropdownModal';

import styles from './Home.styles.js';
import {  } from './Home.actions';

const lists = [
  'Apartamento',
  'Recorrente',
  'Churrasco da firma'
]

class Home extends Component {
  state = {
    openDropdownModal: false,
    dropdownList: [],
    dropdownPosition: 'left'
  }

  openDropdownModal = (items, position) => {
    this.setState({
      openDropdownModal: true,
      dropdownList: items,
      dropdownPosition: position
    })
  }

  onCloseDropdown = () => {
    this.setState({
      openDropdownModal: false
    })
  }

  render () {
    const { openDropdownModal, dropdownList, dropdownPosition } = this.state

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
            <Image source={Images.iconPersonPlusLight} style={styles.iconPersonPlusLight} />
          </View>
        </View>
        <ScrollableTabView
          tabBarBackgroundColor={Colors.secondary}
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

        {openDropdownModal &&
          <DropdownModal
            list={dropdownList}
            position={dropdownPosition}
            onClose={this.onCloseDropdown}
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
