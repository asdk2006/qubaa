import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import AnimatedBar from "react-native-animated-bar";
var progs=0;
let colo='green';
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress:0,
      getcolor:'green'
    };
  }
  getcolorfromname=(names)=>{
  
        switch(names) {
    
          case 'خفيف جدا':
            colo='#3E9EDA'
            progs=0.2;
            break;
          
          case 'متوسط':
            colo='#A0AE1F',progs=0.5;
            break;
    
          case 'شبه فارغ':
            colo='#87BADB',progs=0.1;
            break;
    
          case 'خفيف':
            colo='#3CC5C4',progs=0.3
            break;
    case 'مزدخم':
            colo='red',progs=0.8;
        break;
        case 'فارغ':
                colo='green',progs=0.1;
            break;
            case 'مغلق':
                    colo='black',progs=0.0;
                break;
          default:
         //   Alert.alert("NUMBER NOT FOUND");
        
          }
          return colo
      }
      getcprogfromname=(names)=>{
  
        switch(names) {
    
          case 'خفيف جدا':
            colo='#3E9EDA'
            progs=0.2;
            break;
          
          case 'متوسط':
            colo='#A0AE1F',progs=0.5;
            break;
    
          case 'شبه فارغ':
            colo='#87BADB',progs=0.1;
            break;
    
          case 'خفيف':
            colo='#3CC5C4',progs=0.3
            break;
    case 'مزدخم':
            colo='red',progs=0.8;
        break;
        case 'فارغ':
                colo='green',progs=0.1;
            break;
            case 'مغلق':
                    colo='black',progs=0.0;
                break;
          default:
         //   Alert.alert("NUMBER NOT FOUND");
        
          }
          return progs
      }
//if(names=="خفيف جدا"){colo='#3E9EDA',progs=0.2}
//if(names=="متوسط"){colo='#A0AE1F',progs=0.5}
//if(names== "شبه فارغ"){colo='#87BADB',progs=0.1}
//if(names=="خفيف"){colo='#3CC5C4',progs=0.3}
//if(names=="مزدخم"){colo='red',progs=0.8}
//if(names=="فارغ"){colo='green',progs=0.1}
//if(names=="مغلق"){colo='black',progs=0.0}

//console.log("the colom is:",colo)

 // return colo
  
  render() {
    return (
      <View style={styles.carstyl}>
      <Text style={styles.txt1}>حالات الزحام</Text>
    <View style={styles.neewstyl}>
      <Text style={styles.txt}>{this.props.f1}</Text>
        <View style={styles.barstyle}>
       <AnimatedBar
        progress={this.getcprogfromname(this.props.namess)}
        height={25}
        borderColor="white"
        fillColor= "white"
        barColor={this.getcolorfromname(this.props.namess)}
        borderRadius={55}/>
      </View>
      <Text style={styles.txt}>{this.props.d1}</Text>
      </View>
      
<View style={styles.neewstyl}>
<Text style={styles.txt}>{this.props.f2}</Text>
<View style={styles.barstyle}>
<AnimatedBar
progress={this.getcprogfromname(this.props.namess1)}
  height={25}
  borderColor="white"
  fillColor="white"
  barColor={this.getcolorfromname(this.props.namess1)}
  borderRadius={55}/>
</View>
<Text style={styles.txt}>{this.props.d2}</Text>
</View>
<View style={styles.neewstyl}>
<Text style={styles.txt}>{this.props.f3}</Text>
<View style={styles.barstyle}>
<AnimatedBar
progress={this.getcprogfromname(this.props.namess2)}
height={25}
borderColor="white"
fillColor="white"
barColor={this.getcolorfromname(this.props.namess2)}
borderRadius={55}/>
</View>
<Text style={styles.txt}>{this.props.d3}</Text>
</View>
<View style={styles.neewstyl}>
<Text style={styles.txt}>{this.props.f4}</Text>
<View style={styles.barstyle}>
<AnimatedBar
progress={this.getcprogfromname(this.props.namess3)}
height={25}
borderColor="white"
fillColor="white"
barColor={this.getcolorfromname(this.props.namess3)}
borderRadius={55}/>
</View>
<Text style={styles.txt}>{this.props.d4}</Text>
</View>
<View style={styles.neewstyl}>
<Text style={styles.txt}>{this.props.f5}</Text>
<View style={styles.barstyle}>
 <AnimatedBar
 progress={this.getcprogfromname(this.props.namess4)}
height={25}
borderColor="white"
fillColor="white"
barColor={this.getcolorfromname(this.props.namess4)}
borderRadius={55}/>
</View>
<Text style={styles.txt}>{this.props.d5}</Text>
   </View>
       </View>
    );
  }
}

 
{/*

    
  
 
*/}