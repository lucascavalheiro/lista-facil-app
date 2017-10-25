import React, { Component } from 'react'
import {
  View,
  TextInput,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import styles from './Items.styles.js'
import { ActionButton } from 'react-native-material-ui'

import { Colors, Images } from '../../Themes/'

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <View style={styles.addButtonContainer}>
          <ActionButton style={{ container: styles.addButton }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Items);
