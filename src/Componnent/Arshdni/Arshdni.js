import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
class Arshdni extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View  style={styles.carstylcr}>

        <Text style={styles.txt}> ارشدني</Text>
      </View>
    );
  }
}

export default Arshdni;
