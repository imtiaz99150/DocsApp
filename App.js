
import React, {useState, useMemo} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'

const App = () => {
 const [counter, setCounter] = useState(0)
 const [GintiNumber , setGintiNumber] = useState(0)

 const useMemomofunction = useMemo ( 
   function checkUsememo(){
  console.log('here rerendering function')
  return counter +  counter 
   },[counter])

   
  return (
    <SafeAreaView style={{justifyContent:"center", alignItems:'center', marginTop:223}}>
       
       <View>
         <Text>{useMemomofunction}</Text>
       </View>

      <Text style={{fontSize:30}}>Counter: {counter}</Text>
      <TouchableOpacity
      style={{backgroundColor:"black", borderRadius:20}} onPress={()=>{setCounter(counter+1)}}>
        <Text style={{fontSize:30, color:"white", padding:10}}>Increament</Text>
      </TouchableOpacity>


      <View>
      <Text style={{fontSize:30, marginTop:110}}>G-Number: {GintiNumber}</Text>
      <TouchableOpacity
      style={{backgroundColor:"black", borderRadius:20}} onPress={()=>{setGintiNumber(GintiNumber+1)}}>
        <Text style={{fontSize:30, color:"white", padding:10}}>GintiNumber</Text>
      </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})


// import React from 'react'
// import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
// import RootStack from './src/Navigations/RootsStack'

// const App = () => {
//   return (
//      <RootStack/>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

