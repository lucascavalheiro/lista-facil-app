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
import UserBalance from '../Shared/UserBalance'
import { Button } from 'react-native-material-ui'

import styles from './Expenses.styles.js'

const users = [
  {name: 'Marcela Alcântara', userPicture: 'http://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg'},
  {name: 'Pedro José Silva', userPicture: 'http://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg'}
]

class Expenses extends Component {
  state = {
    expenseValue: '',
  }

  onSettleUp = () => {
    console.log('settle up');
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
              <UserPicture
                userPicture='http://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg'
                size={50}
              />
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
            <View style={styles.usersContainer}>
              {users.map((user, i) =>
                <UserBalance user={user} key={i} />
              )}
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.total}>
            <Text style={styles.totalSpendingTitle}>Total gasto por todos</Text>
            <Text style={styles.totalSpending}>R$146,00</Text>
          </View>
          <Button
            text='Quitar'
            primary
            raised
            style={{ container: styles.settleUp }}
            onPress={this.onSettleUp}
          />
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
