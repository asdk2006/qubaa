import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Drawer from './src/screens/Drawer/Drawer';
import Tabnav  from './src/screens/Tabnav'
export default function App() {
  return (
   
  
    <View style={{flex:1}}>
       <Drawer/>
      
      
       </View>
     
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
