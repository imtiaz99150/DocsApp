import React from 'react';
import Style from './Style'
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const CustomButoon = props => {
  let {text, onPress, leftIcon, rightIcon, disabled} = props;
  return (
    <View style={{alignSelf: 'center', width: '90%', alignSelf: 'center'}}>
      <TouchableOpacity
        style={Style.ButtonStyle}
        onPress={onPress}
        activeOpacity={0.7}
        disabled={disabled}
        >

        {leftIcon !== undefined && (
          <View style={{width: '10%',flex:0.1}}>
            <Image source={leftIcon} style={Style.leftIconStyle} />
          </View>
        )}

        <View style={{alignItems: 'center', flex:0.8}}>
          <Text style={Style.ButtonText}>{text}</Text>
        </View>

        {rightIcon !== undefined && (
          <View style={{width: '10%',flex:0.1}}>
            <Image source={rightIcon} style={Style.rightIconStyle} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
export default CustomButoon;

