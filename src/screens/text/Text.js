import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Text = () => {
    return (
        <View>
             <View style={{paddingTop: Platform.OS == "android" ? "0%" : "9%"}}>
        <CustomHeader title="TEXT"/>
        </View>
            <Text>Text</Text>
        </View>
    )
}

export default Text

const styles = StyleSheet.create({})
