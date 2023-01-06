import { StyleSheet } from "react-native";
import colors from "../../assets/colors/Colors";
import { hp, wp } from "../../utilities/CommonMethod";
export default styles = StyleSheet.create({
    Container: {
      height: hp('8%'),
      width: wp('80%'),
      marginTop: hp("2%"),
      borderRadius: hp("5%"),
      borderWidth: 0.3,
      alignSelf: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'center',
      borderColor:colors.themeColor,
      borderWidth:1
    },
    PlaceHolderStyle: {
      height: hp('8%'),
      height: 50,
    },
    ImageStyle: {
      width: wp('6%'),
      height: hp ('3%'),
      alignSelf: 'center',
      tintColor:colors.themeColor

    },
    imageRightSide:{
        flex: 0.1,
        padding:12
    }
  });