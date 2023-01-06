import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default styles = StyleSheet.create({
    HeaderStyle: {
      padding: hp("1.5%"),
      width: wp('100%'),
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#6200EE',
      justifyContent: 'center',
      justifyContent: 'space-between',
    },
    imageStyle: {
      width: wp("10.5%"),
      height: hp("5%"),
      borderRadius: hp("6%"),
      alignSelf: 'center',
      backgroundColor: 'white',
    },
    imageStyle2: {
        width: wp("9%"),
        height: hp("5%"),
        borderRadius: hp("6%"),
       alignSelf: 'center',
       //backgroundColor:"white"
    },
    HeaderText: {
      width: wp("70%"),
      fontSize: wp("8%"),
      color:"white",
      letterSpacing: wp("0.5%"),
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  