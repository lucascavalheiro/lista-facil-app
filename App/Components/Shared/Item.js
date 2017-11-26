import React, { Component, PropTypes } from 'react'
import { View, Image } from 'react-native'
import CheckBox from 'react-native-check-box'
import { Colors, Images } from '../../Themes/'

import styles from './Item.styles.js'


class Item extends Component {
  render () {
    const { item, onCheckItem } = this.props

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
  onCheckItem: PropTypes.func
}

export default Item
