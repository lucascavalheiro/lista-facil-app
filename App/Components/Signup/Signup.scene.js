import React, { Component } from 'react'
import {
  View,
  TextInput,
  Image,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import styles from './Signup.styles.js'
import { Button } from 'react-native-material-ui'
import TextField from 'react-native-md-textinput'
import firebase from 'react-native-firebase'

import { Colors, Images } from '../../Themes/'
import { onChangePicture, onChangeName, onChangeNewEmail, onChangeNewPassword } from './Signup.actions'

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

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber()
    }
  }

  onChangePicture = (picture) => {
    console.log('change picture')
    // this.props.onChangePicture(picture)
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

    const userName = this.props.name
    const userEmail = this.props.newEmail
    const userPassword = this.props.newPassword
    const { navigate } = this.props.navigation

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
      .then((user) => {
        user.updateProfile({
          displayName: userName,
          photoURL: "https://lh6.googleusercontent.com/-fxGs1Fc8XXM/AAAAAAAAAAI/AAAAAAAAaxQ/nsscCqlX3rw/photo.jpg?sz=64"
        }).then(function() {
          console.log('User successfully created ', user)
          navigate('Home')
        }).catch(function(error) {
          console.log('user update error ', error);
        })
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
          <TouchableOpacity onPress={this.onChangePicture}>
            <Image style={styles.logo} source={Images.iconAddPicture} />
          </TouchableOpacity>
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
  const { name, newEmail, newPassword } = state.signup
  return { name, newEmail, newPassword }
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
