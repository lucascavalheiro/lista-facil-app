import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native'

import styles from './styles.js'

export default class Button extends Component {
  render () {
    const { style } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.buttonContainer, style]}
        onPress={() => {Alert.alert('ae')}}
      >
        <View style={styles.button}>
          <Text style={styles.text}>ADICIONAR</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
