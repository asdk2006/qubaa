import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';
 class Mybootom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iscolor1:this.props.iscolor1,
      iscolor2:this.props.iscolor2,
      iscolor3:this.props.iscolor3,
      iscolor4:this.props.iscolor4,
      iscolor5:this.props.iscolor5,

    };
  }
gotomain(){
    this.props.navigation.navigate("Mainscrscr")
}
gototravel(){
    this.props.navigation.navigate("Mytravlescr")
}
gotoview(){
    this.props.navigation.navigate("Showingscr")  
}
gotodalil(){

    this.props.navigation.navigate("Hranscreen")  

}
gotobenifits(){

  this.props.navigation.navigate("Benifetsscr")  

}

  render() {
    const mycolor1=this.state.iscolor1?"green":"black";
    const mycolor2=this.state.iscolor2?"green":"black";
    const mycolor3=this.state.iscolor3?"green":"black";
    const mycolor4=this.state.iscolor4?"green":"black";
    const mycolor5=this.state.iscolor5?"green":"black";

    return (
   
      <View style={{flex:1, width:'100%',height:80,flexDirection:'row',backgroundColor:'#bdc3c7'}}>
      <TouchableOpacity
       style={{width:'20%' ,height:80,alignItems:'center',justifyContent:'center',flexDirection:'column'}}
       onPress={()=> this.gotobenifits()}
       
       >
       <Image  source={require('../../assets/d3.png')} style={{width:40,height:40,tintColor:mycolor1}}></Image>
       <Text style={{color:mycolor1}}>الفوائد</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'20%' ,height:80,alignItems:'center',justifyContent:'center'}}
        onPress={()=> this.gototravel()}
        >
        <Image  source={require('../../assets/a1.png')} style={{width:40,height:40,tintColor:mycolor2}}></Image>
        <Text  style={{color:mycolor2}}>رحلاتي</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{width:'20%' ,height:80,alignItems:'center',justifyContent:'center'}}
         onPress={()=> this.gotomain()}
         >
         <Image  source={require('../../assets/dd.png')} style={{width:40,height:40,tintColor:mycolor3}}></Image>
         <Text style={{color:mycolor3}}>الرئيسية</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:'20%' ,height:80,alignItems:'center',justifyContent:'center'}}
          onPress={()=> this.gotoview()}
          >
          <Image  source={require('../../assets/a5.png')} style={{width:40,height:40,tintColor:mycolor4}}></Image>
          <Text style={{color:mycolor4}}>مرئيات</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{width:'20%' ,height:80,alignItems:'center',justifyContent:'center'}}
           onPress={()=> this.gotodalil()}
           >
          <Image  source={require('../../assets/d1.png')} style={{width:40,height:40,tintColor:mycolor5}}></Image>
          <Text style={{color:mycolor5}}>دليل الحرم</Text>
           </TouchableOpacity>
      </View>
      
    );
  }
}



export default withNavigation(Mybootom)