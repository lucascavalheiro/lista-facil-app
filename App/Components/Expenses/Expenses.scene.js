import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { ActionButton } from 'react-native-material-ui'
import { Colors, Images } from '../../Themes/'
import UserPicture from '../Shared/UserPicture'

import styles from './Expenses.styles.js'

class Expenses extends Component {
  state = {
    expenseValue: '',
  }

  render () {
    const { expenseValue, quantity } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputItem}
              onChangeText={(expenseValue) => this.setState({expenseValue})}
              value={expenseValue}
              placeholder='Valor gasto'
              underlineColorAndroid='rgba(0,0,0,0)'
              autoCorrect={false}
            />
          </View>
          <View style={styles.addButtonContainer}>
            <ActionButton style={{ container: styles.addButton }} />
          </View>
        </View>
        <View>
          <ScrollView style={styles.balanceContainer}>
            <View style={styles.owner}>
              <UserPicture size={50} />
              <View style={styles.totalBalanceContainer}>
                <Text style={styles.totalBalance}>Balanço total</Text>
                <View style={styles.oweContainer}>
                  {true && <View>
                    <Text style={styles.youOwe}>você deve R$23,00</Text>
                  </View>}
                  {false && <View>
                    <Text style={styles.oweYou}>te devem R$23,00</Text>
                  </View>}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
