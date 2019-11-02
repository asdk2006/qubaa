import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator,} from 'react-navigation-tabs';
import HomeScreen from './HomeScreen/HomeScreen';
import Mytravle from './Mytravle/Mytravle';
import Showing from './Showing/Showing';
import Guidescreen from './Guidescreen/Guidescreen';
//import Benefits from './Benefits/Benefits';

const Tabnaves = createBottomTabNavigator({

    Home: { screen: HomeScreen },
    Mytravle: { screen: Mytravle },
    Showing: { screen: Showing },
    Guidescreen: { screen: Guidescreen },
   // Benefits: { screen: Benefits },
  });
  
  const Tabcontainr= createAppContainer(Tabnaves);

  export default class Tabnav extends Component {
  
    render() {
      return <Tabcontainr/>;
    

      
    }
  }




