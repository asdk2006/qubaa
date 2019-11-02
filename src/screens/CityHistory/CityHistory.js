import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Myheder from '../Drawer/Myheder';
import Mybootom from '../../Componnent/Mybootom/Mybootom';
export default class CityHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
      <Myheder
      title="تاريخ مكة والمدينة"
      />
        <Text> CityHistory </Text>
        <View style={{ zIndex: 999,  width: '100%',
        height: 75,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick}}>
      }}>
       <Mybootom/>
       </View>
      </View>
    );
  }
}


