import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native'
import { Calendar } from 'react-native-calendars'
import NetInfo from "@react-native-community/netinfo";

const HotelBookingScreen = ({ navigation }) => {

    const [isConnected, setIsConnected] = useState(false)
    const url = navigation.getParam('url')

    const subscriber = NetInfo.addEventListener(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
        return state.isConnected
    });

    useEffect(() => {
        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            setIsConnected(state.isConnected)
        });
    })



    const CheckConnectivity = () => {
        // For Android devices
        // console.log("Connectivity", isNetworkAvailable)
        if (Platform.OS === "android") {
            if (isConnected == true || subscriber == true) {
                navigation.navigate('Success')
            } else {
                navigation.navigate('Fail')
            }
        }
    };



    return (
        <View style={styles.container}>
            <Image source={{ uri: url }} style={styles.image}></Image>

            <Calendar> </Calendar>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white' }}>
                <TouchableOpacity style={styles.resrvationBT} onPress={() => { CheckConnectivity() }} >
                    <Text style={styles.resrvationTxt}>check In  </Text>
                    <Text style={{ color: '#3E3E3E', fontSize: 24, fontWeight: 'bold' }}>17 May</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.resrvationBT} onPress={() => { CheckConnectivity() }} >
                    <Text style={styles.resrvationTxt}>Check Out</Text>
                    <Text style={{ color: '#3E3E3E', fontSize: 24, fontWeight: 'bold' }}>May 21</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.continueBT} onPress={() => { CheckConnectivity() }} >
                <Text style={styles.continueTxt}>Continue</Text>
            </TouchableOpacity>

        </View>

    )

}

HotelBookingScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-around'

    },
    continueBT: {
        width: 325,
        height: 57,
        alignSelf: 'center',
        borderRadius: 28,
        margin: 5,
        backgroundColor: '#00A76E',
        padding: 15,
    },
    continueTxt: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
    },
    resrvationBT: {
    },
    resrvationTxt: {
        color: 'rgba(62, 62, 62, 0.6)',
        fontSize: 18,

    }
})

export default HotelBookingScreen