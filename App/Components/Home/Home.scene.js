import React, { Component } from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  Picker,
} from 'react-native'
import { Button } from 'react-native-material-ui'
import { Colors } from '../../Themes/'
import { connect } from 'react-redux';

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
          <View style={styles.listNameContainer}>
            <Text style={styles.listName}>Apartamento</Text>
            <Text style={styles.listArrow}>▼</Text>
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
