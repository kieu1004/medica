import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'

import { colors } from '../global/styles'
import { PrimaryButton } from '../components/Button'





export default function onBoard2({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerImg}>
                <Image
                    style={{
                        width: '90%',
                        height: '60%',
                        resizeMode: 'contain',
                        marginHorizontal: 25,
                    }}
                    source={require('../assets/onboard2.jpg')}
                />
            </View>
            <View style={styles.textContainer}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>
                        Get 24/7 care
                    </Text>
                    <Text
                        style={{
                            marginTop: 10,
                            fontSize: 15,
                            textAlign: 'center',
                            color: colors.text_fuzz3,
                        }}>
                        Video Chat with a doctor or message our virtual
                        care team and get answers without leaving
                        your house.
                    </Text>
                </View>
                <View style={styles.indicatorContainer}>
                    <View style={styles.indicator} />
                    <View style={styles.currentIndicator} />
                    <View style={styles.indicator} />
                </View>

                <View style={{ marginTop: 30 }}>
                    <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                        <PrimaryButton
                            title="Continue"
                            onPress={() => {
                                navigation.navigate("OnBoard3")
                            }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}





const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
    },

    containerImg:{
        display:'flex',
        height:'100%',
        width:'100%',
        // top: 100
    },

    textContainer: {
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingBottom: 20,
        top: -400
    },

    indicatorContainer: {
        marginTop: 80,
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