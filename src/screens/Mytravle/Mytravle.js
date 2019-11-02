import React, { Component } from 'react';
import { View, Text,ImageBackground } from 'react-native';
import Myheder from '../Drawer/Myheder';
import Cardprofile from '../../Componnent/Cardprofile/Cardprofile';
import Mybootom from '../../Componnent/Mybootom/Mybootom'
export default class Mytravle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
     
      <Myheder
      title="رحلاتي"
      />
    
     
      <ImageBackground source={require('../../assets/travles.jpeg')}
      style={{width: '100%', height: '100%'}}
      >
      <View style={{marginLeft:'2.5%',marginTop:15}}>
      <Cardprofile/>
      </View>
    
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
     iscolor2={true}
     />
     </View>
      </View>
     
    
    );
  }
}

 
