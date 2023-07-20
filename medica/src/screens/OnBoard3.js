import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'

import { colors } from '../global/styles'
import { PrimaryButton, SecondaryButton } from '../components/Button'





export default function onBoard3({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerImg}>
                <Image
                    style={{
                        width: '100%',
                        height: '60%',
                        resizeMode: 'contain',
                    }}
                    source={require('../assets/onboard3.jpg')}
                />
            </View>
            <View style={styles.textContainer}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>
                        Healthcare, without the headaches
                    </Text>
                    <Text
                        style={{
                            marginTop: 10,
                            fontSize: 15,
                            textAlign: 'center',
                            color: colors.text_fuzz3,
                        }}>
                        Renew prescriptions and book appointments with just a few taps.
                    </Text>
                </View>
                <View style={styles.indicatorContainer}>
                    <View style={styles.indicator} />
                    <View style={styles.indicator} />
                    <View style={styles.currentIndicator} />
                </View>

                <View style={{ marginTop: 30 }}>
                    <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                        <PrimaryButton
                            title="Log in"
                            onPress={() => {
                                navigation.navigate("LogIn")
                            }}
                        />
                    </View>
                    <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                        <SecondaryButton
                            title="Create an account"
                            onPress={() => { navigation.navigate("SignUp") }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}





const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },

    containerImg: {
        display: 'flex',
        height: '100%',
        width: '100%',
        // top: 100
    },

    textContainer: {
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingBottom: 20,
        top: -350
    },

    indicatorContainer: {
        marginTop: 50,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },

    currentIndicator: {
        height: 5,
        width: 30,
        borderRadius: 10,
        backgroundColor: colors.primary_1,
        marginHorizontal: 5,
    },

    indicator: {
        height: 5,
        width: 5,
        borderRadius: 6,
        backgroundColor: colors.primary_2,
        marginHorizontal: 5,
    }
})