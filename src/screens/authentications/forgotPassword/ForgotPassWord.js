import React, {useState} from 'react'
import { StyleSheet, Text, View , SafeAreaView, Image, TouchableOpacity, Alert} from 'react-native'
import Style from './Style'
import CustomTextInput from '../../../components/customInputText/CustomTextInput'
import images from '../../../assets/images/images'
import CustomButoon from '../../../components/customButton/CustomButoon'
import auth from '@react-native-firebase/auth';



const ForgotPassWord = ({navigation}) => {
    const [userEmail, setUserEmail] = useState('');
    console.log('foororororogooot passsss===>>>', userEmail)



 
    const forgotPassword = () => {
      LoginApiftn()
       auth().sendPasswordResetEmail(userEmail)
        .then((res)=> {
          Alert.alert(
            "Forgot Password",
            "Email is sent Please check your email",
            [
              
              { text: "OK", onPress: () => {
                navigation.navigate("Login")
              } }
            ]
          );         
        }).catch(function (e) {
            console.log(e)
        }) 
        
    }

 const LoginApiftn=()=> {
  if (userEmail === '') {
    Alert.alert('Please enter email adress!');
  } else if (userEmail !== '' && userEmail.includes('@') == false) {
    Alert.alert('Email format is incorrect!');
  }  
}

 
    return (
        <SafeAreaView style={Style.Container}>
        <Image
         style={{height:"26%", width:"37%", alignSelf:"center", marginTop:"30%"}}
         source={require('../../../assets/images/logo.png')}/>



      <View style={{marginTop:"12%"}}>
      <CustomTextInput
          PlaceHolderText="User Email"
         value={userEmail}
         onChangeText={text => setUserEmail(text)}
         onChangeFormattedText={(text) => {
         setFormattedValue(text);
         }} 
          leftTextIcon={images.mail}
          autoFocus = {false}
          // onFocus={()=>{textInputFocused()}}
        />
      </View>

      <View  style={{marginTop:"12%"}}>
          <CustomButoon text="Send email" onPress={()=> forgotPassword()}/>
      </View>
        </SafeAreaView>
    )
}

export default ForgotPassWord

const styles = StyleSheet.create({})
