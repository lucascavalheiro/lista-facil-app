import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  TextInput
} from 'react-native'
import { Button } from 'react-native-material-ui'

import styles from './NewUserModal.styles.js'

class NewUserModal extends Component {
  state = {
    userEmail: ''
  }

  render () {
    const { userEmail } = this.state
    const { onClose } = this.props

    return (
      <TouchableHighlight style={styles.background} onPress={onClose}>
        <View style={styles.container}>
          <Text style={styles.description}>Digite o email do usuário com quem deseja compartilhar a lista</Text>
          <TextInput
            style={styles.userEmail}
            onChangeText={(userEmail) => this.setState({userEmail})}
            value={userEmail}
            placeholder='Email'
            underlineColorAndroid='rgb(48,63,159)'
            autoCorrect={false}
          />
          <View style={styles.bottom}>
            <Button
              text='Cancelar'
              accent
              onPress={onClose}
              style={{ container: styles.actionButton }}
            />
            <Button
              text='Convidar'
              accent
              onPress={onClose}
              style={{ container: styles.actionButton }}
            />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

NewUserModal.propTypes = {
  onClose: PropTypes.func
}

export default NewUserModal
