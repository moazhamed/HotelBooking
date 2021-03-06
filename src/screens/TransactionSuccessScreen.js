import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Text } from 'native-base'



const TransactionSuccessScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Image source={require('../assets/success.png')} style={styles.icon} />
            <Text style={styles.header}>
                Transaction Success
            </Text>
            <Text style={styles.subHeader}>
                Congratulations! You can see your bookings in the booking section. Enjoy your trip!
            </Text>
            <TouchableOpacity style={styles.continueBT} onPress={() => { navigation.navigate('Home') }} >
                <Text style={styles.continueTxt}>Back To Home</Text>
            </TouchableOpacity>
        </View>
    )
}

TransactionSuccessScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        borderRadius: 30,
        marginTop: 160
    },
    icon: {
        width: 78,
        height: 78,
        alignSelf: 'center',
    },
    header: {
        color: '#313131',
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 25,
    },
    subHeader: {
        color: '#616161',
        fontSize: 16,
        marginHorizontal: 25,
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

})

export default TransactionSuccessScreen