import React from 'react';
import Style from './Style';
import images from '../../assets/images/images';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {color} from 'react-native-reanimated';

const CustomHeader = props => {
  let {rightIcon, lefttIcon} = props
  return (
    <View>
      <View style={Style.HeaderStyle}>
      <TouchableOpacity onPress={() => { props.onLeftIconPress()}}>
      <Image style={Style.imageStyle2} source={lefttIcon}/>
      </TouchableOpacity>
   
        
        {/* <TouchableOpacity onPress={() => {props.onPress()}}>
          <Image style={Style.imageStyle} source={require('../../assets/images/Arrow.png')}/>
        </TouchableOpacity> */}

        <View>
          <Text style={Style.HeaderText}>{props.title}</Text>
        </View>

        <TouchableOpacity onPress={() => { props.onRightIconPress()}}>
          <Image style={Style.imageStyle2} source={rightIcon}/>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default CustomHeader;
