import {StyleSheet} from 'react-native'
import colors from '../../assets/colors/Colors';
import { hp, wp } from '../../utilities/CommonMethod';
export default StyleSheet.create({

Container: {
    flex: 1,
    backgroundColor:"white",
    },
    ImageStyle:{
        height:hp(14),
        width:wp(30)
    },
    imagelogoView:{
       alignItems:"center",
       marginTop:hp(28)
    
    }
});