import Style from './Style';
// import firebase from 'firebase/app';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import images from '../../../assets/images/images'
import CustomButoon from '../../../components/customButton/CustomButoon';
import CustomTextInput from '../../../components/customInputText/CustomTextInput';
import { hp, wp } from '../../../utilities/CommonMethod';
import { TouchableOpacity, Text, View , Image} from 'react-native';


const Login = ({navigation}) => {
    const [userEmail, setUserEmail] = useState("imti@gmail.com");
    const [userPassword, setUserPassword] = useState("112233");

    const checkValidation = () => {
        const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (userEmail === "" && userPassword === "" ) {
           alert("Please fill all field ");
         } else  if (regx.test(userEmail) === false) {
            alert("Please enter Valid enter email");
          }
           else  if (userPassword.length < 6) {
            alert("Please enter password atleast 6 ch");
          }
          else { 
            Submit()
          }
      }

      // Using UserName And Password 
  const Submit = () => {
    auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        console.log(' Logged in!');
        // navigation.navigate("Tabs");
        setUserEmail('')
        setUserPassword('')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('Email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('Email address is invalid!');
        }
        console.error(error);
      });
      navigation.navigate('Tabs')
  };
    
  // const textInputFocused =()=> {
  // navigation.navigate('VoiceRecoginition')
  // }

    return (
        <View style={Style.container}>
      
        <View style={{justifyContent:"center",alignSelf:"center", marginTop:hp("8%")}}>
        <Image
         style={{height:hp("26%"), width:wp("41%")}}
         source={require('../../../assets/images/logo.png')} />
        </View>
        
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
        


        <CustomTextInput
         PlaceHolderText="Enter Password"
         onChangeText={(text) => setUserPassword(text)}
         onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
         value={userPassword}
         secureTextEntry={true}
         leftTextIcon={images.password}
        />
            <TouchableOpacity style={Style.ForgotPAsswordView}
            onPress={()=>{navigation.navigate("ForgotPassWord")}}
            >
          <Text style={Style.ForgotPAsswordText}>Forgot Password</Text>
        </TouchableOpacity>

     
    
        <View style={{marginTop:70}}>
           <CustomButoon onPress={() => {checkValidation();}}text="Login"/>
           {/* <Button onPress={() => {navigation.navigate('VoiceRecoginition')}}text="VoiceReco"/> */}
        </View>

       

        <View style={Style.SignUpTextView}>
           <Text style={Style.SignUpText}>Don't have an account.?  </Text>
           <TouchableOpacity onPress={()=>{navigation.navigate("SignUp")}}>
           <Text style={Style.SignUpText}>SignUp</Text>
           </TouchableOpacity>
        </View>

       </View>
    )
}

export default Login

