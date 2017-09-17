import React, { Component } from 'react'
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native'
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
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.buttonContainer}
              onPress={() => {Alert.alert('ae')}}
            >
              <View style={styles.button}>
                <Text style={styles.text}>ADICIONAR</Text>
              </View>
            </TouchableOpacity>
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
