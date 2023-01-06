import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../../components/customHeader/CustomHeader'
const Vedios = () => {
    return (
        <View>
        <View style={{paddingTop: Platform.OS == "android" ? "0%" : "9%"}}>
        <CustomHeader title="VEDIOS"/>
        </View>
            <Text>Vedios</Text>
        </View>
    )
}

export default Vedios

const styles = StyleSheet.create({})
