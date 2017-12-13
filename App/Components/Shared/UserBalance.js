import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text } from 'react-native'
import UserPicture from './UserPicture'
import firebase from 'react-native-firebase'

import styles from './UserBalance.styles.js'

class UserBalance extends Component {
  state = {
    memberBalance: 0
  }

  componentWillReceiveProps(nextProps) {
    this.calculateExpenses(nextProps)
  }

  calculateExpenses = (nextProps) => {
    let memberBalance = 0
    if (nextProps.expenses) {
      Object.keys(nextProps.expenses).map(expense => {
        if (nextProps.expenses[expense].owner === nextProps.user.id) {
          memberBalance += nextProps.expenses[expense].cost
        }
      })
      memberBalance -= nextProps.splitedValue

      this.setState({
        memberBalance: memberBalance,
      })
    }
  }

  render () {
    const { user, totalValue } = this.props
    const { memberBalance } = this.state

    if (user.id === firebase.auth().currentUser._user.uid) {
      return null
    }

    let totalBalanceMessage = {}
    if (memberBalance == 0) {
      totalBalanceMessage = (
        <View style={styles.balanceContainer}>
          <Text style={styles.oweYou}>quitado</Text>
        </View>
      )
    } else if (memberBalance > 0 ) {
      totalBalanceMessage = (
        <View style={styles.balanceContainer}>
          <Text style={styles.youOwe}>você deve</Text>
          <Text style={styles.youOweValue}>R${memberBalance.toFixed(2)}</Text>
        </View>
      )
    } else if (memberBalance < 0) {
      totalBalanceMessage = (
        <View style={styles.balanceContainer}>
          <Text style={styles.oweYou}>te deve</Text>
          <Text style={styles.oweYouValue}>R${Math.abs(memberBalance).toFixed(2)}</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <UserPicture
            size={30}
            userPicture={user.photoURL}
          />
          <Text style={styles.userName}>{user.name}</Text>
        </View>
        <View>{totalBalanceMessage}</View>
      </View>
    )
  }
}

UserBalance.propTypes = {
  user: PropTypes.object,
  expenses: PropTypes.object,
  balance: PropTypes.string,
  totalValue: PropTypes.number,
  splitedValue: PropTypes.number
}

export default UserBalance
