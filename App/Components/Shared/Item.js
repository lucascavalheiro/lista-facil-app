import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import CheckBox from 'react-native-check-box'
import { Colors, Images } from '../../Themes/'

import styles from './Item.styles.js'


class Item extends Component {
  render () {
    const { item, onCheckItem, hide } = this.props

    if (hide) {
      return null
    }

    return (
      <View style={styles.container}>
        <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={onCheckItem}
            isChecked={false}
            rightText={item.name}
            rightTextStyle={{color: Colors.black}}
            checkBoxColor={Colors.gray}
        />
        <Image source={Images.iconPersonPlus} />
      </View>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object,
  hide: PropTypes.bool,
  onCheckItem: PropTypes.func
}

export default Item
