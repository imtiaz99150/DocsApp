import React,{useState} from 'react';
import Style from './Style';
import auth from '@react-native-firebase/auth';
import images from '../../../assets/images/images';
import { hp, wp } from '../../../utilities/CommonMethod';
import firestore from '@react-native-firebase/firestore';
import CustomHeader from '../../../components/customHeader/CustomHeader';
import CustomButoon from '../../../components/customButton/CustomButoon';
import CustomTextInput from '../../../components/customInputText/CustomTextInput';
import { Text, 
        View, 
        SafeAreaView, 
        ScrollView, Image, TouchableOpacity, KeyboardAvoidingView,  } from 'react-native'

const SignUp = ({navigation}) => {

    const [userEmail, setUserEmail] = useState('');
    const [validInput, setvalidInput] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const checkValidation = () =>{
      const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      const phonRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
     
      if (userEmail === "" && userPassword === "") {
         alert("Please enter all required field");
       } 
         else  if (userEmail === "") {
          alert("Please enter email");
        }
        else  if (userPassword === "") {
          alert("Please enter Password");
        }
        else { 
          Submit()
        }
    }

    const Submit=()=>{
      auth()
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        console.log('signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          // console.log('That email address is already in use!');
          alert("email address is already in use!")
        }
        if (error.code === 'auth/invalid-email') {
          // console.log('That email address is invalid!');
          alert("email address is invalid!")
        }
        console.error(error);
      });
    }
   


  
   
    return (
        <View style={Style.container}>
            <SafeAreaView>
      <ScrollView>
      <View style={{justifyContent:"center",alignSelf:"center", marginTop:hp("8%")}}>
        <Image
         style={{height:hp("26%"), width:wp("32%")}}
         source={require('../../../assets/images/logo.png')} />
        </View>

        <View style={{alignItems: 'center'}}></View>

        <CustomTextInput
          PlaceHolderText="User Email"
          onChangeText={text => setUserEmail(text)}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
        //  required={true}
         // value={username}
          leftTextIcon={images.mail}
        />

        <CustomTextInput
          PlaceHolderText="User Password"
          onChangeText={text => setUserPassword(text)}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          //required={true}
          //value={userpassword}
          secureTextEntry={true}
          keyboardType="passwords"
         // returnKeyType="next"
          leftTextIcon={images.password}
          //rightTextIcon
        />

    

      
        <View style={{marginTop: 34}}>
          <CustomButoon
            text="Create User"
            disabled={validInput}
            onPress={() => {
              checkValidation()
            }}
          />
        </View>
      
        <View style={Style.SignUpTextView}>
           <Text style={Style.SignUpText}>Don't have an account.?  </Text>
           <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
           <Text style={Style.SignUpText}>LogIn</Text>
           </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>

            <View style={{marginTop:150}}>

            </View>
        </View>
    )
}

export default SignUp
