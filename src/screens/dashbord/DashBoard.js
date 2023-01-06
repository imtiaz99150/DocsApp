import React, {useEffect, useState} from 'react'
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import {Text, View,Image, TouchableOpacity, FlatList } from 'react-native';
import CustomHeader from '../../components/customHeader/CustomHeader';
import Extensions from '../uploadfile/AttecmentExtension';
import images from '../../assets/images/images';

const DashBoard = ({navigation}) => {
 
    return (
        <View style={{flex:1 ,paddingTop: Platform.OS == "android" ? "0%" : "9%"}}>
            <CustomHeader title="Dash-Board"/>
     
       

          <TouchableOpacity style={styles.plusIconViewStyle} onPress={() => {navigation.navigate('UploadFile')}}>
          {/* <Image style={styles.plusIconStyle} source={require('../../assets/images/plus.png')}/> */}
          <View style={{ width:20, height:20, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:14, color:"white", textAlign:"center"}}>+</Text>
          </View>
         </TouchableOpacity>
        </View>
    )
}

export default DashBoard

