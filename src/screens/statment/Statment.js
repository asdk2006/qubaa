import React, { Component } from 'react';
import { View, Text ,ImageBackground} from 'react-native';
import Myheder from '../Drawer/Myheder';
import Mybootom from '../../Componnent/Mybootom/Mybootom';
export default class Statment extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>

      <Myheder
      title="أفتوني"
      />
      <ImageBackground source={require('../../assets/statem.jpeg')}
      style={{width: '100%', height: '100%'}}
      >
      </ImageBackground>
      <View style={{ zIndex: 999,  width: '100%',
      height: 75,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', //Here is the trick
      bottom: 0, //Here is the trick}}>
    }}>
     <Mybootom
     mycolor4={true}
     />
     </View>
      </View>
    );
  }
}


