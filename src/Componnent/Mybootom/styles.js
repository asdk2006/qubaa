import {StyleSheet, Dimensions} from 'react-native';
//import {colors} from '../../config/styles';

/////'card profile style'
const deviceHeight = Dimensions.get('window').height;

/**
 * Creates a StyleSheet style reference from the given object.
 * @param {object} style - component styles object.
 * @return {object}
 */
export default StyleSheet.create({
  bottoms:{ zIndex: 999,  width: '100%',
  height: 75,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute', //Here is the trick
  bottom: 0, //Here is the trick}}>
  },
    carstyl: {
     // flexDirection:'row',
        backgroundColor:'#FFFFFF',
        alignItems: 'center',
       // justifyContent: 'center',
        borderRadius:25,
       // flex: 1,
        height: '85%',
      //  marginHorizontal: 8,
        width: '95%',
        opacity: 0.8,

     shadowColor: "#000",
     shadowOffset: {
         width: 0,
         height: 3,
     },
    
     shadowOpacity: 0.29,
     shadowRadius: 4.65,
     
     elevation: 7,

    }, text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginRight: 15,
        width:60
    },
    txt:{
      color:'#c0392b',
      fontSize: 22,
      fontWeight:'bold',
     // width:70,
      marginLeft:15
    },
    txt1:{
      color:'#0F8D56',
      fontSize: 22,
     
      marginLeft:10
    },
    barstyle:{
      //marginLeft: 2,
      width: '60%',
      justifyContent:'center',
      alignItems:'flex-start',
     
    },
    neewstyl:{
      flexDirection:'row',   width: '100%',marginTop:5
    }
});