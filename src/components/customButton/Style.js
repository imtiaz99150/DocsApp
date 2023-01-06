import {StyleSheet} from 'react-native'
import { hp, wp } from '../../utilities/CommonMethod';

export default StyleSheet.create({
    ButtonStyle: {
        elevation: 8,
        width: '90%',
        borderRadius: hp("4%"),
        borderWidth: 0.5,
        paddingVertical: hp("2.5%"),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#6200EE',
      },
      ButtonText: {
        width:"100%",
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textAlign:"center",
        textTransform: 'uppercase',
      },
      rightIconStyle:{
        width: wp('5%'),
        height: hp('3.5%')
      },
      leftIconStyle:{
        width: wp('5%'),
        height: hp('3.5%')
      }
      
      
});