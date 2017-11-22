import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text } from 'react-native'
import UserPicture from './UserPicture'

import styles from './UserBalance.styles.js'

class UserBalance extends Component {
  render () {
    const { user } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <UserPicture
            size={30}
            userPicture={user.userPicture}
          />
          <Text style={styles.userName}>{user.name}</Text>
        </View>
        {true &&
          <View style={styles.balanceContainer}>
            <Text style={styles.oweYou}>te deve</Text>
            <Text style={styles.oweYouValue}>R$23,00</Text>
          </View>
        }
        {false &&
          <View style={styles.balanceContainer}>
            <Text style={styles.youOwe}>você deve</Text>
            <Text style={styles.youOweValue}>R$23,00</Text>
          </View>
        }
      </View>
    )
  }
}

UserBalance.propTypes = {
  user: PropTypes.object,
  balance: PropTypes.string,
}

export default UserBalance
