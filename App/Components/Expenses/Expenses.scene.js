import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  ScrollView,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { ActionButton } from 'react-native-material-ui'
import { Colors, Images } from '../../Themes/'
import UserPicture from '../Shared/UserPicture'
import UserBalance from '../Shared/UserBalance'
import { Button } from 'react-native-material-ui'
import firebase from 'react-native-firebase'
import {TextInputMask} from 'react-native-masked-text'

import styles from './Expenses.styles.js'

class Expenses extends Component {
  state = {
    expenses: {},
    expenseValue: null,
    members: []
  }

  componentDidMount() {
    firebase.database().ref('expenses/' + this.props.currentList.id).on('value', (snapshot) => {
      this.setState({ expenses: snapshot.val() })
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ members: nextProps.members })
  }

  onCreateExpense = () => {
    const ref = firebase.database().ref('lists').push()
    let expense = this.state.expenseValue.match(/[+-]?\d+(\.\d+)?/g).map((v) => { return parseFloat(v) })
    expense = parseFloat(expense[0] + '.' + expense[1])

    firebase.database().ref('expenses/' + this.props.currentList.id).update({
      [ref.key]: {
        cost: expense,
        owner: this.props.user.uid,
        settleUp: false
      }
    }, ()=> {
      this.setState({ expenseValue: null })
    })
  }

  onSettleUp = () => {
    console.log('settle up');
  }

  render () {
    const { user, currentList } = this.props
    const { expenses, expenseValue, members } = this.state

    let totalValue = 0
    Object.keys(expenses).map(expense => {
      totalValue += expenses[expense].cost
    })
    totalValue = parseFloat(Math.round(totalValue * 100) / 100).toFixed(2)

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.inputContainer}>
            <TextInputMask
              style={styles.inputItem}
              onChangeText={(expenseValue) => this.setState({expenseValue})}
      				value={expenseValue}
              placeholder='Valor gasto'
      				type={'money'}
              zeroCents
            />
          </View>
          <View style={styles.addButtonContainer}>
            <ActionButton style={{ container: styles.addButton }} onPress={this.onCreateExpense}/>
          </View>
        </View>
        <View>
          <ScrollView style={styles.balanceContainer}>
            <View style={styles.owner}>
              <UserPicture
                userPicture={user.photoURL}
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
              {members && members.map((member, i) =>
                <UserBalance user={member} key={i} />
              )}
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.total}>
            <Text style={styles.totalSpendingTitle}>Total gasto por todos</Text>
            <Text style={styles.totalSpending}>R${totalValue}</Text>
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

Expenses.propTypes = {
  user: PropTypes.object,
  currentList: PropTypes.object,
  members: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
