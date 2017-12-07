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
    members: [],
    totalValue: 0,
    totalValueToShow: '',
    userBalance: 0,
    listNotShared: true
  }

  componentDidMount() {
    this.setState({ members: this.props.members })

    firebase.database().ref('expenses/' + this.props.currentList.id).once('value', (snapshot) => {
      this.setState({
        expenses: snapshot.val()
      }, () => {
        this.calculateExpenses()
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ members: nextProps.members })

    firebase.database().ref('expenses/' + nextProps.currentList.id).on('value', (snapshot) => {
      this.setState({
        expenses: snapshot.val()
      }, () => {
        this.calculateExpenses()
      })
    })
  }

  calculateExpenses = () => {
    let totalValue = 0
    let expensesNotSettleUp = []

    if (this.state.expenses) {
      Object.keys(this.state.expenses).map(expense => {
        if (!this.state.expenses[expense].settleUp) {
          totalValue += this.state.expenses[expense].cost
          expensesNotSettleUp.push(this.state.expenses[expense])
        }
      })

      const splitedValue = totalValue / this.state.members.length
      let userBalance = 0
      Object.keys(this.state.expenses).map(expense => {
        if (this.state.expenses[expense].owner === this.props.user.uid) {
          userBalance += this.state.expenses[expense].cost
        }
      })
      userBalance -= splitedValue

      this.setState({
        listNotShared: this.state.members.length === 1,
        userBalance: userBalance,
        totalValue: totalValue,
        totalValueToShow: parseFloat(Math.round(totalValue * 100) / 100).toFixed(2)
      })
    }
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
    const {
      expenses,
      expenseValue,
      members,
      totalValueToShow,
      userBalance,
      listNotShared
    } = this.state

    let totalBalanceMessage = {}
    if (userBalance == 0 || listNotShared) {
      totalBalanceMessage = <Text style={styles.oweYou}>Quitado</Text>
    } else if (userBalance < 0 ) {
      totalBalanceMessage =  <Text style={styles.youOwe}>você deve R${Math.abs(userBalance).toFixed(2)}</Text>
    } else if (userBalance > 0) {
      totalBalanceMessage =  <Text style={styles.oweYou}>te devem R${userBalance.toFixed(2)}</Text>
    }

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
                  <View>{totalBalanceMessage}</View>
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
            <Text style={styles.totalSpendingTitle}>Total gasto</Text>
            <Text style={styles.totalSpending}>R${totalValueToShow}</Text>
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
