import React, { Component } from 'react';
import { View, Text,ImageBackground,ScrollView } from 'react-native';
import Myheder from '../Drawer/Myheder';
import Mybootom from '../../Componnent/Mybootom/Mybootom';
import Cardcrod from '../../Componnent/Cardcrod/Cardcrod';
import Cardtemp from '../../Componnent/Cardtemp/Cardtemp';
import Omra from '../../Componnent/Omra/Omra';
import Arshdni from '../../Componnent/Arshdni/Arshdni';

class Mainscr extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flex:1}}>
      <Myheder
      title="الرئيسية"
      />
     {/* <ImageBackground source={require('../../assets/logo.png')}
      style={{width: '100%', height: '100%'}}
      imageStyle={{width:'100%'}}
      >
     
    </ImageBackground>*/}
    <ScrollView>
    <View style={{flexDirection:'column'}}>
<View style={{marginLeft:'4%',marginTop:20}}>

    <Cardcrod/>
  
    </View>
    <View style={{marginLeft:'4%',marginTop:20}}>

    <Cardtemp/>
    </View>
    <View style={{marginLeft:'4%',marginTop:20}}>

    <Omra/>
    </View>
    <View style={{marginLeft:'4%',marginTop:20,marginBottom:30}}>
    <Arshdni/>
    
    </View>
    
    </View></ScrollView>
      <View style={{ zIndex: 999,  width: '100%',
      height: 75,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', //Here is the trick
      bottom: 0, //Here is the trick}}>
    }}>
     <Mybootom
     iscolor3={true}
     />
     </View>
      </View>
    );
  }
}

export default Mainscr;
