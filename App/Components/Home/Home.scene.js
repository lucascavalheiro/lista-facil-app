import React, { Component } from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  Picker,
} from 'react-native'
import { Button } from 'react-native-material-ui'
import { Colors } from '../../Themes/'
import { connect } from 'react-redux';

import styles from './Home.styles.js'
import {  } from './Home.actions';

class Home extends Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>

        <Picker
          mode='dropdown'
          style={styles.select}>
          <Picker.Item label="Churrasco" value="Churrasco" />
          <Picker.Item label="Recorrente" value="Recorrente" />
        </Picker>
        </View>
        <Button
          text="ADICIONAR"
          raised
          onPress={this.addItem}
          style={{container: styles.button, text: styles.buttonText}}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
