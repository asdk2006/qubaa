import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Myheder from '../Myheder';


export default class Occasion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
      <Myheder/>
        <Text> Occasion </Text>
      </View>
    );
  }
}

 
