import React, { Component } from 'react';
import { View, Text,ImageBackground,TouchableOpacity,Image, ScrollView,Alert } from 'react-native';
import Myheder from '../Drawer/Myheder';
import Card from '../../Componnent/Card/Card';
import Mybootom from '../../Componnent/Mybootom/Mybootom';
import Barchart from '../BarChart/Barchart';
import {states} from '../../services/Apiservice';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      data1:[],
      data2:[],
      collapsed:true,//do not show the body by default
        collapsed1:false,
        imagcollaps:false,
        collapsedray:[]
    };
  }
getthereult(){
 
}
async componentDidMount(){
  const res = await states().then(response => {
    this.setState({data:response.data,data1:response.data,data2:response.data}) 
  //  console.log(this.state.data)
    })
}
  render() {
    const imgtint=this.state.imagcollaps?(require('../../assets/collapsopen.png')):require('../../assets/collapsdown.png')
    const imgtint1=this.state.collapsed1?(require('../../assets/collapsopen.png')):require('../../assets/collapsdown.png')
    return (
      <View style={{flex:1}}>
        <Myheder
        title="حالات الزحام"
        />
      
        <ScrollView>
        <ImageBackground source={require('../../assets/kaba.png')}
        style={{width: '100%', height: '100%'}}
        >
        
      
      
        <Collapse 
        isCollapsed={this.state.collapsed} 
        onToggle={(isCollapsed)=>this.setState({imagcollaps:isCollapsed})}>
      <CollapseHeader>
      <View style={{alignItems:'center'}}>
      <View style={{flexDirection:'row',backgroundColor:'#F5F6FA',height:45,width:'95%',borderRadius:5,alignItems:'center'}}>
      <Image source={require('../../assets/8.png')} style={{marginLeft:10,width:40,height:40}}/>
      <Text style={{marginTop:5,fontSize:14}}>الطواف</Text>
     
      <Image source={imgtint} style={{position:'absolute',  right:5,marginTop:5}}/>
     
      </View>
      </View>
      </CollapseHeader>
      <CollapseBody>
      <View style={{width:'90%',marginLeft:20 , flexDirection:'row',marginTop:15}}>
      { this.state.data.slice(0, 1).map((items, key)=>(
      <Card
      key={items.RitualID}
//{ ...Alert.alert(items.RitualID.toString())}
//{ ...Alert.alert(items.Floors[0].caseOfCrowds.name)}
      namess={items.Floors[0].caseOfCrowds.name}
      namess1={items.Floors[1].caseOfCrowds.name}
      namess2={items.Floors[2].caseOfCrowds.name}
      namess3={items.Floors[3].caseOfCrowds.name}
      namess4={items.Floors[4].caseOfCrowds.name}
      f1={items.Floors[0].floorName}
         d1={items.Floors[0].caseOfCrowds.name}
      f2={items.Floors[1].floorName}
      d2={items.Floors[1].caseOfCrowds.name}
      f3={items.Floors[2].floorName}
      d3={items.Floors[2].caseOfCrowds.name}
      f4={items.Floors[3].floorName}
      d4={items.Floors[3].caseOfCrowds.name}
      f5={items.Floors[4].floorName}
      d5={items.Floors[4].caseOfCrowds.name}
      />))}
          </View>
      </CollapseBody>
      
    </Collapse>


    <Collapse 
    isCollapsed={this.state.collapsed} 
    onToggle={(isCollapsed)=>this.setState({collapsed1:isCollapsed})}>
  <CollapseHeader>
  <View style={{alignItems:'center',marginTop:10}}>
  <View style={{flexDirection:'row',backgroundColor:'#F5F6FA',height:45,width:'95%',borderRadius:5,alignItems:'center'}}>
  <Image style={{marginLeft:10, width:40,height:40 }} source={require('../../assets/8.png')} />
  <Text style={{marginTop:5,fontSize:14}}>السعى</Text>
 
  <Image source={imgtint1} style={{position:'absolute',  right:5,marginTop:5}}/>
 
  </View>
  </View>
  </CollapseHeader>
  <CollapseBody>
  <View style={{width:'90%',marginLeft:20 , flexDirection:'row',marginTop:15}}>
  { this.state.data1.slice(1, 2).map((item, key)=>(
    <Card
    key={item.RitualID}
  //  { ...Alert.alert(item.RitualID.toString())}
    namess={item.Floors[0].caseOfCrowds.name}
    namess1={item.Floors[1].caseOfCrowds.name}
    namess2={item.Floors[2].caseOfCrowds.name}
    namess3={item.Floors[3].caseOfCrowds.name}
    namess4={item.Floors[4].caseOfCrowds.name}
    f1={item.Floors[0].floorName}
    d1={item.Floors[0].caseOfCrowds.name}
    f2={item.Floors[1].floorName}
    d2={item.Floors[1].caseOfCrowds.name}
    f3={item.Floors[2].floorName}
    d3={item.Floors[2].caseOfCrowds.name}
    f4={item.Floors[3].floorName}
    d4={item.Floors[3].caseOfCrowds.name}
    f5={item.Floors[4].floorName}
    d5={item.Floors[4].caseOfCrowds.name}
    />))}
      </View>
  </CollapseBody>
  
</Collapse>


<Collapse 
isCollapsed={this.state.collapsed} 
onToggle={(isCollapsed)=>this.setState({collapsed1:isCollapsed})}>
<CollapseHeader>
<View style={{alignItems:'center',marginTop:10}}>
<View style={{flexDirection:'row',backgroundColor:'#F5F6FA',height:45,width:'95%',borderRadius:5,alignItems:'center'}}>
<Image source={require('../../assets/8.png')} style={{marginLeft:10, width:40,height:40}}/>
<Text style={{marginTop:5,fontSize:14}}>رمى الجمرات</Text>

<Image source={imgtint1} style={{position:'absolute',  right:5,marginTop:5}}/>

</View>
</View>
</CollapseHeader>
<CollapseBody>
<View style={{width:'90%',marginLeft:20 , flexDirection:'row',marginTop:15}}>
{ this.state.data2.slice(2, 3).map((itemm, key)=>(
  
  <Card
  key={itemm.RitualID}
 //{ ...Alert.alert(itemm.Floors[0].caseOfCrowds.name)}
  namess={itemm.Floors[0].caseOfCrowds.name}

  namess1={itemm.Floors[1].caseOfCrowds.name}
  namess2={itemm.Floors[2].caseOfCrowds.name}
  namess3={itemm.Floors[3].caseOfCrowds.name}
  namess4={itemm.Floors[4].caseOfCrowds.name}
  f1={itemm.Floors[0].floorName}
  d1={itemm.Floors[0].caseOfCrowds.name}
  f2={itemm.Floors[1].floorName}
  d2={itemm.Floors[1].caseOfCrowds.name}
  f3={itemm.Floors[2].floorName}
  d3={itemm.Floors[2].caseOfCrowds.name}
  f4={itemm.Floors[3].floorName}
  d4={itemm.Floors[3].caseOfCrowds.name}
  f5={itemm.Floors[4].floorName}
  d5={itemm.Floors[4].caseOfCrowds.name}
  />))}
  </View>
</CollapseBody>

</Collapse>



      
        </ImageBackground>
        </ScrollView>
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

export default HomeScreen;
