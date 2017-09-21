import React, { Component } from 'react'
import {
  View,
  TextInput,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import styles from './Login.styles.js'
import { Button } from 'react-native-material-ui'
import TextField from 'react-native-md-textinput'

import { Colors, Images } from '../../Themes/'
import { onChangeEmail, onChangePassword } from './Login.actions'

class Login extends Component {
  constructor(props) {
    super(props)

    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onLoginPress = this.onLoginPress.bind(this)
  }

  onChangeEmail(email) {
    this.props.onChangeEmail(email)
  }

  onChangePassword(email) {
    this.props.onChangePassword(email)
  }

  onLoginPress() {
    this.props.navigation.navigate('Home')
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={Images.logo} />
        </View>
        <View style={styles.loginBox}>
          <TextField
            label={'Email'}
            value={this.props.email}
            onChangeText={this.onChangeEmail}
            highlightColor={Colors.white}
            textColor={Colors.white}
            labelColor={Colors.white}
          />
          <TextField
            label={'Senha'}
            value={this.props.password}
            onChangeText={this.onChangePassword}
            highlightColor={Colors.white}
            textColor={Colors.white}
            labelColor={Colors.white}
            secureTextEntry
          />
          <Button
            text="LOGIN"
            raised
            onPress={this.onLoginPress}
            color={Colors.primary}
            style={{container: styles.button}}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { email, password } = state.login
  return { email, password }
}

const mapDispatchToProps = dispatch => ({
  onChangeEmail: (email) => {
    dispatch(onChangeEmail(email))
  },
  onChangePassword: (password) => {
    dispatch(onChangePassword(password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
