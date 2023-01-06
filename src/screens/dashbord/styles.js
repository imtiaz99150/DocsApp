import {StyleSheet} from 'react-native'
import colors from '../../assets/colors/Colors';
import { hp, wp } from '../../utilities/CommonMethod';


export default StyleSheet.create({

container: {
    flex: 1,
    backgroundColor:"white"
    },  plusIconViewStyle:{
        backgroundColor: colors.themeColor ,
        position: 'absolute', 
        zIndex: 9999,
        bottom: 20, 
        right: 20,  
        borderRadius:60,
        width:60, 
        height:60,
        borderWidth:2,
        borderColor:'pink',
        justifyContent:"center" ,
        alignItems:"center"
    },
    plusIconStyle:{
        height: hp('10%'), 
        width: wp('20%'),
    },

});