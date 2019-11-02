import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';
class Cardcrod extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  gotomain(){
    this.props.navigation.navigate("HomeScreenscr")
}
  render() {
    return (
        <View style={{flex:1}}>
<TouchableOpacity style={styles.carstylc}
onPress={()=> this.gotomain()}
>

        <Text style={styles.txt}> حالات الزحام </Text>
        <Image source={require('../../assets/clickhere.png')} 
        style={{width:60,height:40}}
        ></Image>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Cardcrod);
