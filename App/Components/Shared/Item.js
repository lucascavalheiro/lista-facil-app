import React, { Component } from 'react'
import { View, Image } from 'react-native'
import CheckBox from 'react-native-check-box'
import { Colors, Images } from '../../Themes/'

import styles from './Item.styles.js'


export default class Item extends Component {
  render () {
    return (
      <View style={styles.container}>
        <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={()=>console.log('clicked')}
            isChecked={true}
            rightText='Nome do item'
            rightTextStyle={{color: Colors.black}}
            checkBoxColor={Colors.gray}
        />
        <Image source={Images.iconPersonPlus} />
      </View>
    )
  }
}
