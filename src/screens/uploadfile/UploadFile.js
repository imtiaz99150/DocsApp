import React,{useState, useEffect} from 'react';
import styles from './styles';
import images from '../../assets/images/images';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import CustomHeader from '../../components/customHeader/CustomHeader';
import CustomButoon from '../../components/customButton/CustomButoon';
import {StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import CustomTextInput from '../../components/customInputText/CustomTextInput';
import DocumentPicker, { DirectoryPickerResponse, DocumentPickerResponse, isInProgress, types,} from 'react-native-document-picker';
import firebaseHelper from '../uploadfile/FirebaseHelp';


const UploadFile = ({navigation}) => {
    const [description, setDescription] = useState()
    const [result, setResult] = useState();
    const [fileURL, setFileURL] = useState('');
    
    // console.log("=====>>>>==profileRUL===profileRUL==profileRUL====>>>", fileURL)
    // console.log("=====>>>>==file===upload==result====>>>", result)
    // console.log("=====>>>>Description", description)


const  filePicker = async ()=>{
  try {
    const pickerResult = await DocumentPicker.pick({
        type:  
         [ DocumentPicker.types.doc,
           DocumentPicker.types.audio,
           DocumentPicker.types.docx,
           DocumentPicker.types.images,
           DocumentPicker.types.pdf,
           DocumentPicker.types.video,
           DocumentPicker.types.plainText,
           DocumentPicker.types.xls,

        ]
        
    })
    console.log("=====file===== pickerResult===== pickerResult ==> ",pickerResult);
     setResult(pickerResult)
    //uploadImage(pickerResult.uri, pickerResult.name);

  } catch (e) {
    handleError(e) }
}
const handleError = (err) => {
  if (DocumentPicker.isCancel(err)) {
    console.warn('cancelled')
    // User cancelled the picker, exit any dialogs or menus and move on
  } else if (isInProgress(err)) {
    console.warn('multiple pickers were opened, only the last will be considered')
  } else {
    throw err
  }
}


      const uploadFiles = (result ,callback)=>{
        firebaseHelper.uploadToStorage(result,(response )=>{
                callback(response);
                console.log("==response==response=response=response=response==>>",response)
        })
      }


    const createTicket =()=>{
        uploadFiles(result,(response)=>{
        //  console.log("==result.type===>", result[0].type)
            let data = {
                url         : response,
                description : description,
                fileType    : result[0].type
               
            }
            firebaseHelper.createDocument(data,(response)=>{
                console.log("===>create===>Document===>  ",response);
            });
        })};


      


  
  return (
    <View style={styles.container}>
      <View style={{paddingTop: Platform.OS == 'android' ? '0%' : '9%'}}>
        <CustomHeader title="Upload File"
         lefttIcon = {images.headerArrow}
         onLeftIconPress={() => {navigation.goBack()}}
          />
      </View>

      <TouchableOpacity style={styles.addfileImageStyleView}
         onPress={() => { filePicker() }}>
        <Image style={styles.addfileImageStyle} source={result ? {uri:result.uri} : require('../../assets/images/uploadImage.png')} />
      </TouchableOpacity>

      <View style={styles.textInputView}>
      <CustomTextInput
          PlaceHolderText="description"
          value={description}
          onChangeText={text => setDescription(text)}
          onChangeFormattedText={(text) => {
           setFormattedValue(text);
         }}
          leftTextIcon={images.pen}
        />
      </View>

      <View style={styles.buttonStyleView}>
          <CustomButoon onPress={()=>{ createTicket() }} text="Upload"/>
      </View>

    </View>
  );
};

export default UploadFile;








