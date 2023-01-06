import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

export function hp(value){
    return heightPercentageToDP(value);
}

export function wp(value){
    return widthPercentageToDP(value)
}