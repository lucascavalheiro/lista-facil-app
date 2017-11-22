import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { Images } from '../../Themes/'

import styles from './UserPicture.styles.js'

class UserPicture extends Component {
  render () {
    const { size, userPicture } = this.props

    return (
      <Image
        source={{uri: userPicture}}
        resizeMode='contain'
        style={[
          styles.iconPerson,
          {height: size, width: size}
        ]}
      />
    )
  }
}

UserPicture.propTypes = {
  size: PropTypes.number,
  userPicture: PropTypes.string
}

export default UserPicture
