import React, { Component } from 'react';
import { View, Text ,ScrollView,Image, StyleSheet,I18nManager,ImageBackground } from 'react-native';
import { createAppContainer, Icon } from 'react-navigation';
     import SafeAreaView from 'react-native-safe-area-view';
   import {createDrawerNavigator,DrawerNavigatorItems } from  'react-navigation-drawer';
import Aboutus from '../Aboutus/Aboutus';
import Mytravle from '../Mytravle/Mytravle';
import MyEvents from '../MyEvents/MyEvents';
import Showing from '../Showing/Showing';
import Statment from '../statment/Statment';
import Applicationsr from '../Applicationsr/Applicationsr';
import CityHistory from '../CityHistory/CityHistory';
import HomeScreen from '../HomeScreen/HomeScreen';
import Praytime from '../Praytime/Praytime';
import tabnav from '../Tabnav';
import Mybootom from '../../Componnent/Mybootom/Mybootom';
import Haram from '../Haram/Haram';
import Benifets from '../Benifets/Benifets';
import Mainscr from '../../screens/Mainscr/Mainscr';
const CostemDrawer=(props)=>(
  <ScrollView>
    <SafeAreaView>
      <View style={{height:220,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
      <Image
source={require('../../assets/logo.png')}
style={[styles.icons,]}
/>
 </View>
 
      <View style={{backgroundColor:'#278642'}}>
        <DrawerNavigatorItems  {...props}/>
        </View>
   
    </SafeAreaView>
    </ScrollView>
)



const Mydrawer=createDrawerNavigator(

{
  Mainscrscr:{screen:Mainscr,  navigationOptions :{
    title:'الرئيسية',
    drawerIcon:({tintColor})=>(

<Image
source={require('../../assets/f5.png')}
style={[styles.iconmenu,{tintColor:tintColor}]}
/>



    )

  }},

  HomeScreenscr:{screen:HomeScreen, 
      navigationOptions :{
      title:'حالات الزحام',
      drawerLabel: () => null,
     

    }
    },
  
    Aboutusscr:{screen:Aboutus,navigationOptions :{
      title:'من نحن',
      drawerIcon:({tintColor})=>(

        <Image
        source={require('../../assets/a2.png')}
        style={[styles.iconmenu,{tintColor:tintColor, transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}]}
        />)
    }},
    Mytravlescr:{screen:Mytravle,navigationOptions :{
      title:'رحلاتي',
      drawerIcon:({tintColor})=>(

        <Image
        source={require('../../assets/a1.png')}
        style={[styles.iconmenu,{tintColor:tintColor}]}
        />
        
        
        
              )
    }},
    MyEventsscr:{screen:MyEvents,navigationOptions :{
      title:'مناسبات',
      drawerIcon:({tintColor})=>(

        <Image
        source={require('../../assets/a3.png')}
        style={[styles.iconmenu,{tintColor:tintColor}]}
        />
        
        
        
              )
    }},
    Showingscr:{screen:Showing,navigationOptions :{
      title:'مرئيات',
      drawerIcon:({tintColor})=>(

        <Image
        source={require('../../assets/a5.png')}
        style={[styles.iconmenu,{tintColor:tintColor}]}
        />
        
        
        
              )
    }},
    Statmentscr:{screen:Statment,navigationOptions :{
      title:'افتوني',
      drawerIcon:({tintColor})=>(

        <Image
        source={require('../../assets/a8.png')}
        style={[styles.iconmenu,{tintColor:tintColor}]}
        />
        
        
        
              )
    }},
    Praytimescr:{screen:Praytime,navigationOptions :{
      title:'مواقيت الصلاة',
      drawerIcon:({tintColor})=>(

        <Image
        source={require('../../assets/f1.png')}
        style={[styles.iconmenu,{tintColor:tintColor}]}
        />
        
        
        
              )
    }},
    Applicationsrscr:{screen:Applicationsr,navigationOptions :{
      title:'تطبيقات تهمك',
      drawerIcon:({tintColor})=>(

        <Image
        source={require('../../assets/f2.png')}
        style={[styles.iconmenu,{tintColor:tintColor}]}
        />
        
        
        
              )
    }},
    CityHistoryscr:{screen:CityHistory,navigationOptions :{
      title:'تاريخ مكة والمدينة',
      drawerIcon:({tintColor})=>(

        <Image
        source={require('../../assets/f4.png')}
        style={[styles.iconmenu,{tintColor:tintColor}]}
        />
        
        
        
              )
    }},
    
    Hranscreen:{screen:Haram, 
      navigationOptions :{
      title:'دليل الحرم',
      drawerIcon:({tintColor})=>(
  
  <Image
  source={require('../../assets/d1.png')}
  style={[styles.iconmenu,{tintColor:tintColor}]}
  /> )
      }},
  
      Benifetsscr:{screen:Benifets, navigationOptions :{
        title:'فوائد',
        drawerIcon:({tintColor})=>(
    
    <Image
    source={require('../../assets/d3.png')}
    style={[styles.iconmenu,{tintColor:tintColor}]}
    /> )
        }},
    
    
    
  
    
    

},

  

{contentComponent: CostemDrawer,
 // initialRouteName : 'Mytravlescr',
  drawerPosition:'right',
contentOptions:{
  activeTintColor:'#ffffff',
  inactiveTintColor:'#ced6e0'
}
}

)
const Drawercontainer=createAppContainer(Mydrawer);

export default class Drawer extends Component {
  
  render() {
    return <Drawercontainer/>;
    
  }
}  

const styles=StyleSheet.create({
  icons:{
    width:'85%',
    height:187,
    top:10,
    resizeMode:'stretch'
  },
  iconmenu:{
    width:24,
    height:24
  }
})
