import React, { Component } from 'react';
import { View, Text } from 'react-native';
import{Header } from 'react-native-elements';
import Homburger from './Homburger';

 const Myheder = props => {
  
   
    return (
        <Header
        leftComponent={<Homburger navigation={props.navigation} />}
          centerComponent={{
            text:props.title,
            style:{fontSize:22, color: "white", fontWeight: "bold" }
          }}
          statusBarProps={{barStyle:"dark-content" }}
          containerStyle={{
            backgroundColor: '#278642',
            justifyContent: 'space-around',
          }}
        />
    
    
    
    );
  }


export default Myheder;
