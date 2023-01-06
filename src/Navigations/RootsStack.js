import  React from 'react';
import Routes from '../Navigations/Routes';
import colors from '../assets/colors/Colors';
import {Image, ScrollView } from 'react-native';
import DashBoard from '../screens/dashbord/DashBoard';
import PdfViever from '../screens/pdfscreen/PdfViever';
import UploadFile from '../screens/uploadfile/UploadFile';
import Login from '../screens/authentications/login/Login';
import SignUp from '../screens/authentications/signup/SignUp';
import Splash from '../screens/authentications/splash/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPassWord from '../screens/authentications/forgotPassword/ForgotPassWord';

//Screen Bottom Tabs
import Exel from '../screens/exel/Exel';
import Vedios from '../screens/vedios/Vedios';
import Word from '../screens/word/Word';
import Settings from '../screens/settings/Settings';
import PdfScreen from '../screens/pdfscreen/PdfScreen';
import PptScreen from '../screens/textscreen/TextScreen';
import TextScreen from '../screens/textscreen/TextScreen'



const Tab = createBottomTabNavigator();

  function RootTabs() {
  return (
     <Tab.Navigator 
      screenOptions={({route, index}) => ({
         headerShown: false,
         tabBarShowLabel: true,
          tabBarOptions: { activeTintColor:'white', },
          tabBarStyle: {backgroundColor: route.name === 'PdfScreen' ? 'themeColor' : colors.themeColor},
         tabBarActiveTintColor: route.name === 'Tabs' ?  'white' : route.name !== 'Tabs' ? 'pink':"dark",
       tabBarIcon: () => {
    
        // console.log('index', index)
        let iconName = require('../assets/images/home.png');
        if (route.name === 'DashBoard') {
          iconName = require('../assets/images/home.png');
        }
        if (route.name === 'PdfScreen') {
          iconName = require('../assets/images/pdf.png');
        }
        if (route.name === 'TextScreen') {
          iconName = require('../assets/images/plainText.png');
        }
        if (route.name === 'Exel') {
          iconName = require('../assets/images/xls.png');
        }  
        if (route.name === 'Word') {
          iconName = require('../assets/images/word.png');
        } if (route.name === 'Settings') {
          iconName = require('../assets/images/setting.png');
        }
        return (<Image source={iconName} style={{width: 30,height:30, resizeMode: 'contain'}}/>
        )}})}>
        <Tab.Screen name={Routes.DashBoard}   component={DashBoard} />
        <Tab.Screen name={Routes.PdfScreen}   component={PdfScreen} />
        <Tab.Screen name={Routes.TextScreen}  component={TextScreen} />
        <Tab.Screen name={Routes.Exel}        component={Exel}      />
        <Tab.Screen name={Routes.Word}      component={Word}    />
        <Tab.Screen name={Routes.Settings}    component={Settings} />
     

      </Tab.Navigator>
  );
}




const Stack = createNativeStackNavigator();
export default function RootStack () {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
         screenOptions={{
         headerShown: false}}>
        <Stack.Screen name={Routes.Splash}component={Splash} />
         <Stack.Screen name={Routes.Login} component={Login} />
         <Stack.Screen name={Routes.SignUp} component={SignUp} />
         <Stack.Screen name={Routes.Tabs} component={RootTabs} />
         <Stack.Screen name={Routes.UploadFile} component={UploadFile} />
         <Stack.Screen name={Routes.ForgotPass} component={ForgotPassWord} />
         <Stack.Screen name={Routes.PdfViever} component={PdfViever}/>
      </Stack.Navigator>
      </NavigationContainer>

  );
};




