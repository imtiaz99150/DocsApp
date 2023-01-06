import {StyleSheet} from 'react-native'
import { hp, wp } from '../../utilities/CommonMethod';

export default StyleSheet.create({

container: {
    flex: 1,
    backgroundColor:"white"
    },
    addfileImageStyleView:{
        marginTop:hp(20),
        alignItems:"center",
        borderRadius:1
    },
    addfileImageStyle:{
       height:hp(20),
       width:wp(40),
       resizeMode: 'contain',
     
    },
    textInputView:{
        paddingTop:hp(6),
    },
    buttonStyleView:{
        marginTop:hp(2)
    }

});