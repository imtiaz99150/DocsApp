import React, {useState, useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import Extensions from '../uploadfile/AttecmentExtension'
import images from '../../assets/images/images'
import colors from '../../assets/colors/Colors';
import CustomHeader from '../../components/customHeader/CustomHeader'

const Exel = () => {


const [data, setData] = useState()
console.log("======data=====data===data=====data====>>>>", data)


  useEffect(() => {
    GetData();
    }, []);
    const GetData = () => {
      
      
      
      let data = [];
        firestore()
          .collection('Uploded_Files')
          .get()
          .then(querySnapshot => {
            // console.log('Total users: ', querySnapshot.data())
            querySnapshot.forEach(documentSnapshot => {

              if( Extensions.EXCEL.includes(documentSnapshot.data().fileType) ){
              data.push({
              "name":documentSnapshot.data().description,
              "profile":documentSnapshot.data().url,
              "fileType": documentSnapshot.data().fileType
            });
              setData(data);
            }});
          });
      };

   
      
    return (
        <View>
       <View style={{paddingTop: Platform.OS == "android" ? "0%" : "9%"}}>
        <CustomHeader title="Excel"/>
        </View>
        <View style={{marginTop:18}}>
       <FlatList
         data={data}
         keyExtractor={item => item.key}
         renderItem={({item, index}) => {
           console.log('item data of flatlist =====>>>>', item);
           return (
             <View style={{flex:1,alignItems:"center"}}>
                
                <TouchableOpacity style={{width:"90%", flexDirection:"row", marginTop:15,  borderWidth:1, padding:8, borderRadius:14, backgroundColor:colors.themeColor}}>
                <View style={{width:"50%", justifyContent:"center", alignItems:"center"}}>
                <Text style={{color:"white", fontSize:35}}>{item.name}</Text>
                </View> 
              <View style={{alignItems:"center",width:"50%",alignSelf:"center"}}>
                <Image  style={{width:60, height:60 }}
                source={{uri: item.profile}? images.excelIcon : null}/>  
               </View>
               </TouchableOpacity>


               {/* <TouchableOpacity style={{width:"100%", flexDirection:"row"}}>
                <View style={{width:"50%", justifyContent:"center", alignItems:"center"}}>
                <Text style={{color:colors.themeColor, fontSize:35}}>{item.name}</Text>
                </View> 


              <View style={{alignItems:"center",width:"50%",alignSelf:"center"}}>
                <Image  style={{width:60, height:60 }}
                source={{uri: item.profile}? images.pdfIcon : null}/>  
               </View>
               </TouchableOpacity> */}

              </View>
            );
          }}
        />
    </View>
        </View>
    )
}

export default Exel

const styles = StyleSheet.create({})
