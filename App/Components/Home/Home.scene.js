import React, { Component } from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { connect } from 'react-redux';


import Button from '../Common/Button';
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
          <Button style={styles.buttonContainer}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
