import Extensions from "./AttecmentExtension";
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';



class FirebaseHelper {
  
        CollectionName   = "Uploded_Files";
        storageReference = "Uploded_Files";
        audioRefrence    = `${this.storageReference}/Audio_file`;
        imageRefrence    = `${this.storageReference}/Image-file`;
        PdfRefrence      = `${this.storageReference}/Pdf_file`;
        videoRefrence    = `${this.storageReference}/Video_file`;
        WordReference    = `${this.storageReference}/word_file`;
        excelReference   = `${this.storageReference}/Excel_file`;
        plainText        = `${this.storageReference}/Text_file`;

   
    createDocument=(data , callback)=>{
        firestore()
        .collection(this.CollectionName)
        .add(data)
        .then((res)=>{
         callback(res);
        })
       }

    uploadToStorage = async(result , callback)=>{

        console.log("====>response====>of====>results==result==>>>",result);
        let file  = result[0].uri.replace("content", "file");
        console.log("file==file==file", file);
        let ref = storage().ref("dummy");
        await ref.putFile(result[0].uri);
    
        // let file = result[0].uri;
        // let type = result[0].type;

        // console.log("==type=type=type=type=type=type=type=type=type", type)
        // console.log(" selected document==>  ",this.returnType(type)); 
        // let reference = `${this.returnType(type)}/${result[0].name}` ;
        // console.log("====>reference==of==reference====>>>",reference);

        // let ref = storage().ref(reference);
        // console.log("====>reference==of==file===file=>file>>",file);

        // await ref.putFile(file).then(()=>{
        // ref.getDownloadURL().then((url)=>{
        //     console.log("==url==url=url==path=path=>> ", url);
        //     callback(url);
        // })})
       callback("")
    }


 


    returnType=(type)=>{
       
        console.log("type===of===file====>>>",type);
        if( Extensions.IMAGE.includes(type) ){
            return this.imageRefrence
            } 
        else if(Extensions.AUDIO.includes(type)){
            return this.audioRefrence;
            }
        else if(Extensions.PDF.includes(type)){
            return this.PdfRefrence
            }
        else if(Extensions.EXCEL.includes(type)){
            return this.excelReference
            }
        else if(Extensions.WORD.includes(type)){
                return this.WordReference;
            }
        else if(Extensions.TEXT.includes(type)){
            return this.plainText;
            }
          
         
    }

    



}


const firebaseHelper = new  FirebaseHelper(); 
export default firebaseHelper;






