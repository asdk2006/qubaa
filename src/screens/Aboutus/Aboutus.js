import React, { Component } from 'react';
import { View, Text,TouchableOpacity ,Image,ScrollView} from 'react-native';
import Myheder from '../Drawer/Myheder';
import CardTeam from '../../Componnent/cardTeam/CardTeam';
import Mybootom from '../../Componnent/Mybootom/Mybootom';
class Aboutus extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#c8d6e5'}}>
      <Myheder/>
      
      <ScrollView>
      <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../../assets/aboutus.png')} style={{width:80,height:80,
        tintColor:'#01a3a4',marginTop:15,marginLeft:10}} />
      
        <CardTeam 
        img={require('../../assets/vision-icon-300x300.png')}
        team="اصحاب الحملة"
        />
      </View>
      <View style={{marginTop:15,justifyContent:'center',alignItems:'center',width:'100%'}}>
       
        </View>
        <View style={{flexDirection:'row'}}>
        <CardTeam 
        img={require('../../assets/vision-icon-300x300.png')}
        team="الرؤية"
        />
      
        <CardTeam
        img={require('../../assets/education.png')}
        team="قريق التعليم والوعظ"
        />
        
       
       
       
       
        
        </View>
        <View style={{flexDirection:'row',marginTop:15}}>
        <CardTeam
        img={require('../../assets/manageteam.png')}
        team="فريق الادارة"
        />
        <CardTeam
        img={require('../../assets/media.png')}
        team="فريق الاعلام"
        />
        
       
       
       
       
        
        </View>
        <View style={{flexDirection:'row',marginTop:15,marginBottom:100}}>
        <CardTeam
        img={require('../../assets/foug.png')}
        
        team="فريق ادارة الافواج"
        />
        <CardTeam
        img={require('../../assets/haj.png')}
        team="فريق الاشراف وخدمة الحجاج"
        />
        
       
       
       
        
        </View>
        </ScrollView>
       
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

export default Aboutus;
