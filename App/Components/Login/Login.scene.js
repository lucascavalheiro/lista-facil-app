import React, { Component } from 'react'
import {
  View,
  TextInput,
  Image,
  Text,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import styles from './Login.styles.js'
import { Button } from 'react-native-material-ui'
import TextField from 'react-native-md-textinput'
import firebase from 'react-native-firebase'

import { Colors, Images } from '../../Themes/'
import { onChangeEmail, onChangePassword } from './Login.actions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.unsubscriber = null
    this.state = {
      user: null,
      loading: false,
      loginError: null
    }
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user })
    })

    if (this.state.user) {
      this.props.navigation.navigate('Home')
    }
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber()
    }
  }

  onChangeEmail = (email) => {
    this.props.onChangeEmail(email.replace(/\s/g,''))
  }

  onChangePassword = (password) => {
    this.props.onChangePassword(password)
  }

  onLoginPress = () => {
    this.setState({ loading: true })
    // firebase.auth().signInWithEmailAndPassword(this.props.email, this.props.password)
    firebase.auth().signInWithEmailAndPassword('phillipeframos@gmail.com', 'p670rto')
      .then((user) => {
        // console.log('User successfully logged in', user)
        this.props.navigation.navigate('Home')
        this.setState({ loading: false })
      })
      .catch((err) => {
        console.log('User signin error', err)
        this.setState({ loading: false, loginError: err })
      })
  }

  onCreateAccountPress = () => {
    this.props.navigation.navigate('Signup')
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={Images.logo} />
        </View>
        {this.state.loginError &&
          <View style={styles.loginErrorContainer}>
            <Text style={styles.loginError}>
              Usuário ou senha incorretos
            </Text>
          </View>
        }
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
            text="ENTRAR"
            raised
            disabled={!this.props.email === '' || !this.props.password === ''}
            onPress={this.onLoginPress}
            style={{container: styles.button}}
          />
          <Button
            text="CRIAR CONTA"
            onPress={this.onCreateAccountPress}
            style={{container: styles.buttonCreateAccount, text: styles.buttonCreateAccountText}}
          />
        </View>

        {this.state.loading &&
          <View style={styles.loadingContainer}>
            <ActivityIndicator
              animating={this.state.loading}
              size="large"
              style={styles.loading}
              color={Colors.white}
            />
          </View>
        }
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
