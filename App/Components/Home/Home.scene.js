import React, { Component } from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Picker,
} from 'react-native'
import { Colors, Images } from '../../Themes/'
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import styles from './Home.styles.js'
import {  } from './Home.actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.listNameContainer}>
              <Text style={styles.listName}>Apartamento</Text>
              <Text style={styles.listArrow}>▼</Text>
            </View>
            <Image source={Images.iconMore} style={styles.iconMore} />
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
          <View style={styles.container} tabLabel='ITENS'>
            <Text>TESTE</Text>
          </View>
          <View style={styles.container} tabLabel='DIVISÃO'>
            <Text>TESTE</Text>
          </View>
        </ScrollableTabView>
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
