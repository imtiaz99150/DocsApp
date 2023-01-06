import React from 'react'
import styles from './styles'
import images from '../../assets/images/images'
import auth from '@react-native-firebase/auth';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import CustomHeader from '../../components/customHeader/CustomHeader'
const Settings = () => {

  const signOut=()=>{
    auth()
    .signOut()
    .then(() => {
        alert('User Sign Out')
    });
    
  }
    return (
        <View>
             <View style={{paddingTop: Platform.OS == "android" ? "0%" : "9%"}}>
              <CustomHeader title="Settings"/>
             </View>
             <TouchableOpacity
             onPress={()=>{signOut()}}
             style={styles.imagelogoView}>
             <Image style={styles.ImageStyle} source={images.logout} />
             </TouchableOpacity>
        </View>
    )
}

export default Settings

