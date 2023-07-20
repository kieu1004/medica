import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { colors } from '../global/styles'






const PrimaryButton = ({ title, onPress = () => { } }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={styles.btnContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}


const SecondaryButton = ({ title, onPress = () => { } }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={{ ...styles.btnContainer, backgroundColor: colors.text_white, borderWidth: 1, borderColor: colors.primary_1 }}>
                <Text style={{ ...styles.title, color: colors.primary_1 }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export { PrimaryButton, SecondaryButton }

const styles = StyleSheet.create({
    title: {
        color: colors.text_white,
        fontWeight: 'bold',
        fontSize: 18
    },

    btnContainer: {
        backgroundColor: colors.primary_1,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})