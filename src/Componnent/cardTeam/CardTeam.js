import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
import styles from './styles';

export default class CardTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.carstyl}>
        <TouchableOpacity style={{ justifyContent:'center',alignItems:'center'}}>

     <Image source={this.props.img}
     style={{width:80,height:80,tintColor:'#01a3a4'}}
     />
     
        <Text style={{color:'#01a3a4',fontSize:18,fontWeight:'bold',
    justifyContent:'center',textAlign:'center'}}> {this.props.team} </Text>
       
      
      </TouchableOpacity>
      </View>
    );
  }
}


