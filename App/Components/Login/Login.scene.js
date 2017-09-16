import React, { Component } from 'react'
import {
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native'
import { connect } from 'react-redux';
import styles from './Login.styles.js'

import { onChangeEmail, onChangePassword } from './Login.actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onLoginPress = this.onLoginPress.bind(this);
  }

  onChangeEmail(email) {
    this.props.onChangeEmail(email);
  }

  onChangePassword(email) {
    this.props.onChangePassword(email);
  }

  onLoginPress() {
    Alert.alert('AE TONTO!');
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.props.email}
          onChangeText={this.onChangeEmail}
        />
        <TextInput
          style={styles.textInput}
          value={this.props.password}
          onChangeText={this.onChangePassword}
          secureTextEntry
        />
        <Button
          title="LOGIN"
          onPress={this.onLoginPress}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { email } = state.login;
  return { email };
}

const mapDispatchToProps = dispatch => ({
  onChangeEmail: (email) => {
    dispatch(onChangeEmail(email));
  },
  onChangePassword: (password) => {
    dispatch(onChangePassword(password));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
