import {StyleSheet} from 'react-native'
import colors from '../../../assets/colors/Colors';
import { hp, wp } from '../../../utilities/CommonMethod';

export default StyleSheet.create({

container: {
    flex: 1,
    backgroundColor:"white"
    },
SignUpTextView:{
    width:wp("100%"),
    flexDirection:"row",
    justifyContent:"center",
   
},
SignUpText:{
    fontSize:hp("2%"),
    fontWeight:"700",
    marginTop:hp("3%"),
    color:colors.themeColor,
},




});