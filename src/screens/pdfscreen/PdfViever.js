import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import CustomHeader from '../../components/customHeader/CustomHeader'
import Pdf from 'react-native-pdf';
import images from '../../assets/images/images';
import { number } from 'jest-validate/node_modules/@types/yargs';

const PdfViever = ({route, navigation}) => {
    const { file , pdfName} = route.params;
    console.log("==params=data====file==>", file)
    const source = {uri:file ,cache: true };
    console.log("==params=data==source=source=source=source=>", source)

    return (
        <View style={styles.container}>
             <CustomHeader title={pdfName}
              lefttIcon = {images.headerArrow}
              onLeftIconPress={() => {navigation.goBack()}}
               />

           <Pdf  
             source={source} 
             style={styles.pdf}
             />
             
        </View>)
}

export default PdfViever

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: Platform.OS == "android" ? "0%" : "9%"
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});