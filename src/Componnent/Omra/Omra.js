import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import styles from './styles';
class Omra extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View  style={styles.carstylcr}>

        <Text style={styles.txt}> شرح مناسك العمرة</Text>
        <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center'}}>
        <Image source={require('../../assets/aqsa.jpg')}
        style={{width:100,height:80,borderRadius:20}}       />
       
        <Image source={require('../../assets/aqsa.jpg')}
        style={{width:100,height:80,marginLeft:20,borderRadius:20}}/>
       
        </View>
      </View>
    );
  }
}

export default Omra;
