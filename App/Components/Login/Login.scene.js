import React, { Component } from 'react'
import {
  View,
  TextInput,
  Button,
} from 'react-native'
import { connect } from 'react-redux';
import styles from './Login.styles.js'
import { Card } from 'react-native-material-design';

import { Colors } from '../../Themes/'
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
    this.props.navigation.navigate('Home');
  }

  render () {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Body>
            <View style={styles.loginBox}>
              <TextInput
                style={styles.textInput}
                value={this.props.email}
                onChangeText={this.onChangeEmail}
                placeholder="me@email.com"
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
                color={Colors.primary}
              />
            </View>
          </Card.Body>
        </Card>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { email, password } = state.login;
  return { email, password };
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
