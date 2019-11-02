import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
import styles from './styles';
export default class Cardprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.carstyl}>
      <View style={{marginTop:15}}>
      <Text style={styles.txt}>بيانات المعتمر</Text>
      <Image source={require('../../assets/hprof.png')}
           style={{width:160,height:160,borderRadius:80,borderWidth:4,borderColor:'red'}}
      />
      </View>
<View style={{width:'95%',justifyContent:'flex-start'}}>
<View style={{flexDirection:'row'}}>
        <Text style={styles.txt}>اسم المعتمر:</Text>
        <Text style={styles.txt}> المعتمر</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.txt}>رقم البطاقة الشخصية:</Text>
        <Text style={styles.txt}> البطاقة الشخصية</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.txt}>رقم العاتف:</Text>
        <Text style={styles.txt}> العاتف</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.txt}>العنوان:</Text>
        <Text style={styles.txt}>عنوان</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.txt}>صورة جواز السفر</Text>
        <TouchableOpacity>
        <Image source={require('../../assets/passports.png')} 
        style={{width:70,height:50,marginLeft:20}}
        ></Image></TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.txt}>الحالة الصحية</Text>
        <Text style={styles.txt}> الصحية</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.txt}>رقم هاتف الطوارئ</Text>
        <Text style={styles.txt}> هاتف الطوارئ</Text>

        </View>
        </View>
      </View>
    );
  }
}

