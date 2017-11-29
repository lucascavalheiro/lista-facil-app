import React, { Component } from 'react'
import {
  View,
  TextInput,
  Image,
  Text,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import styles from './Signup.styles.js'
import { Button } from 'react-native-material-ui'
import TextField from 'react-native-md-textinput'
import firebase from 'react-native-firebase'

import { Colors, Images } from '../../Themes/'
import { onChangeName, onChangeNewEmail, onChangeNewPassword } from './Signup.actions'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.unsubscriber = null
    this.state = {
      user: null,
      loading: false,
      signupError: null
    }
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user })
    })

    console.log('user ', this.state.user)
    if (this.state.user) {
      this.props.navigation.navigate('Home')
    }
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber()
    }
  }

  onChangeName = (name) => {
    this.props.onChangeName(name)
  }

  onChangeNewEmail = (email) => {
    this.props.onChangeNewEmail(email.replace(/\s/g,''))
  }

  onChangeNewPassword = (password) => {
    this.props.onChangeNewPassword(password)
  }

  onSignupPress = () => {
    this.setState({ loading: true })
    firebase.auth().createUserWithEmailAndPassword(this.props.newEmail, this.props.newPassword)
      .then((user) => {
        console.log('User successfully created', user)
        this.props.navigation.navigate('Home')
        this.setState({ loading: false })
      })
      .catch((err) => {
        console.log('User signin error', err)
        this.setState({ loading: false, signupError: err })
      })
  }

  onLoginPress = () => {
    this.props.navigation.navigate('Login')
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={Images.logo} />
        </View>
        {this.state.signupError &&
          <View style={styles.signupErrorContainer}>
            <Text style={styles.signupError}>
              Email já está sendo usado
            </Text>
          </View>
        }
        <View style={styles.signupBox}>
          <TextField
            label={'Nome'}
            value={this.props.name}
            onChangeText={this.onChangeName}
            highlightColor={Colors.white}
            textColor={Colors.white}
            labelColor={Colors.white}
          />
          <TextField
            label={'Email'}
            value={this.props.newEmail}
            onChangeText={this.onChangeNewEmail}
            highlightColor={Colors.white}
            textColor={Colors.white}
            labelColor={Colors.white}
          />
          <TextField
            label={'Senha'}
            value={this.props.newPassword}
            onChangeText={this.onChangeNewPassword}
            highlightColor={Colors.white}
            textColor={Colors.white}
            labelColor={Colors.white}
            secureTextEntry
          />
          <Button
            text="CRIAR CONTA"
            raised
            disabled={this.props.name === '' || this.props.newEmail === '' || this.props.newPassword === ''}
            onPress={this.onSignupPress}
            style={{container: styles.button}}
          />
          <Button
            text="FAZER LOGIN"
            onPress={this.onLoginPress}
            style={{container: styles.buttonLogin, text: styles.buttonLoginText}}
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
  const { newEmail, newPassword } = state.signup
  return { newEmail, newPassword }
}

const mapDispatchToProps = dispatch => ({
  onChangeName: (name) => {
    dispatch(onChangeName(name))
  },
  onChangeNewEmail: (email) => {
    dispatch(onChangeNewEmail(email))
  },
  onChangeNewPassword: (password) => {
    dispatch(onChangeNewPassword(password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
