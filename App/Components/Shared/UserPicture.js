import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { Images } from '../../Themes/'

import styles from './UserPicture.styles.js'

class UserPicture extends Component {
  render () {
    const { size } = this.props

    return (
      <Image
        source={{uri: 'https://www.wpclipart.com/signs_symbol/icons_oversized/male_user_icon.png'}}
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
  size: PropTypes.number
}

export default UserPicture
