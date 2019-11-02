import {StyleSheet, Dimensions} from 'react-native';
//import {colors} from '../../config/styles';

const deviceHeight = Dimensions.get('window').height;

/**
 * Creates a StyleSheet style reference from the given object.
 * @param {object} style - component styles object.
 * @return {object}
 */
export default StyleSheet.create({
    carstylc: {
     // flexDirection:'row',
        backgroundColor:'#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:25,
        //flex: 1,
        height: 120,
      //  marginHorizontal: 8,
        width: '95%',
       // opacity: 0.8,

       shadowColor: "#000",
       shadowOffset: {
         width: 0,
         height: 12,
       },
       shadowOpacity: 0.58,
       shadowRadius: 16.00,
       
       elevation: 24,

    }, text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginRight: 15,
        width:60
    },
    txt:{
      color:'#0F8D56',
      fontSize: 22,
     // width:70,
      marginLeft:10
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