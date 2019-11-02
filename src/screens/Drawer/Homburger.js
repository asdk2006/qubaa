import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
 const Homburger = props => {
  
  
    return (
      <Icon 
      color ='#ecf0f1'
      name ='menu'
      onPress = {()=>props.navigation.toggleDrawer()}
     
      />
    );
  }

export default withNavigation(Homburger);
