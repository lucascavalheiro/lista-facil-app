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
import firebase from 'react-native-firebase'

import styles from './NewUserModal.styles.js'

class NewUserModal extends Component {
  state = {
    userEmail: '',
    errorMessage: ''
  }

  onInviteUser = () => {
    const invitedEmail = this.state.userEmail.replace(/\s/g,'')
    firebase.auth().fetchProvidersForEmail(invitedEmail)
      .then(providers => {
        if (providers.length === 0) {
          this.setState({ errorMessage: 'Usuário com este email ainda não existe' })
        } else {
          firebase.database().ref('members').once('value', (snapshot) => {
            let user = {}
            Object.keys(snapshot.val()).map((member, i) => {
              if (snapshot.val()[member].email === invitedEmail) {
                user = snapshot.val()[member]

                firebase.database()
                  .ref('members/' + member + '/lists')
                  .update({
                      [this.props.currentList.id]: true,
                  })

                firebase.database()
                  .ref('lists/' + this.props.currentList.id + '/members')
                  .update({
                      [member]: true
                  })

                this.setState({ errorMessage: '' })
                this.props.onClose()
              }
            })
          })
        }
      });
  }

  render () {
    const { userEmail, errorMessage } = this.state
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
          <Text style={styles.errorMessage}>{errorMessage}</Text>
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
              disabled={!userEmail}
              onPress={this.onInviteUser}
              style={{ container: styles.actionButton }}
            />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

NewUserModal.propTypes = {
  currentList: PropTypes.object,
  onClose: PropTypes.func
}

export default NewUserModal
