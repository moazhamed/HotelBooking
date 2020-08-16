import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Calendar } from 'react-native-calendars'


const HotelBookingScreen = () => {

    return (
        <View style={styles.container}>
            <Calendar style={styles.calendar}>

            </Calendar>
            <TouchableOpacity style={styles.continueBT} >
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
        borderRadius: 20,
        justifyContent: 'center'
    },
    calendar: {
        marginBottom: 100
    },
    continueBT: {
        width: 165,
        height: 57,
        alignSelf: 'center',
        borderRadius: 28,
        marginTop: 35,
        backgroundColor: '#00A76E',
        padding: 15,
    },
    continueTxt: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export default HotelBookingScreen