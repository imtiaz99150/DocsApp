import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
// import { onChange } from 'react-native-reanimated';
import Style from './Style';

const CustomTextInput = props => {
  let {
    PlaceHolderText,
    value,
    leftTextIcon,
    rightTextIcon,
    onChangeText,
    rightTextIconPress,
    secureTextEntry,
    onFocus
  } = props;
  return (
    <View style={Style.Container}>
      {leftTextIcon !== undefined && (
        <View style={Style.imageRightSide}>
          <Image style={Style.ImageStyle} source={leftTextIcon} />
        </View>
      )}

      <TextInput
        style={[Style.PlaceHolderStyle, {flex: rightTextIcon ? 0.8 : 0.9}]}
        value={value}
        placeholderTextColor={'grey'}
        placeholder={PlaceHolderText}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus !== undefined && onFocus}
        onChangeText={text => {
          onChangeText(text);
        }}/>
        
      {rightTextIconPress !== undefined ? (
        <TouchableOpacity style={Style.imageRightSide}>
          <Image style={Style.ImageStyle} source={rightTextIcon} />
        </TouchableOpacity>
      ) : (
        <View style={Style.imageRightSide}>
        <Image style={Style.ImageStyle} source={rightTextIcon} />
        </View>
      )}
    </View>
  );
};

export default CustomTextInput;
