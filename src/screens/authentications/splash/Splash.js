import React,{useEffect} from 'react'
import Style from './Style'
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import images from '../../../assets/images/images'
import { hp, wp } from '../../../utilities/CommonMethod'
import colors from '../../../assets/colors/Colors'
import auth from '@react-native-firebase/auth';




const Splash = ({navigation}) => {

  
    useEffect(() => {
        setTimeout(function(){
            getUserInformation();
         },
              3000);
    }, [])
 

   
    // redirect login Screen method
  getUserInformation = async ()=>{
   await auth().onAuthStateChanged((user)=>{
        
         
                if(user){
                navigation.navigate("Tabs")
                }else{
                navigation.navigate("Login")
                }
        
    })
  }

  
 
    return (
        <View style={Style.container}>
           
            <View style={{marginTop:150}}>
         
      <View style={{justifyContent:"center",alignSelf:"center"}}>
        <Image
         style={{height:hp("35%"), width:wp("85%")}}
        //  source={require('../../../assets/images/logo.png')} />
        source={require('../../../assets/images/office.png')} />

        </View>
        <View style={{justifyContent:"center",alignSelf:"center", marginTop:30}}>
            <Text style={{color:"#ffa500", fontSize:20, fontWeight:"700", width:100}}>Loading...</Text>
        </View>
            
            </View>
        </View>
    )
}

export default Splash

