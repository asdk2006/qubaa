import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
class Cardtemp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View  style={styles.carstylcr}>

        <Text style={styles.txt}> درجة الحرارة في مكة والمدينة </Text>
      </View>
    );
  }
}

export default Cardtemp;
