import {StyleSheet, Dimensions} from 'react-native';
//import {colors} from '../../config/styles';

const deviceHeight = Dimensions.get('window').height;

/**
 * Creates a StyleSheet style reference from the given object.
 * @param {object} style - component styles object.
 * @return {object}
 */
export default StyleSheet.create({
    carstyl: {
     // flexDirection:'row',
        backgroundColor:'#dfe6e9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:25,
       // flex: 1,
        height: 150,
        marginLeft:"7%",
      //  marginHorizontal: 8,
        width: '40%',
      //  opacity: 0.8,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      
      elevation: 9,

    }, text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginRight: 15,
        width:60
    },
    txt:{
      color:'#0F8D56',
      fontSize: 18,
      width:70,
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