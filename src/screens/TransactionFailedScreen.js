import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Text } from 'native-base'



const TransactionFailedScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Image source={require('../assets/fail.png')} style={styles.icon} />
            <Text style={styles.header}>
                Transaction Failed
            </Text>
            <Text style={styles.subHeader}>
                Please check your internet connection and try again in a moments. Good luck!
            </Text>
            <TouchableOpacity style={styles.continueBT} onPress={() => { navigation.navigate('Description') }} >
                <Text style={styles.continueTxt}>Try Again</Text>
            </TouchableOpacity>
        </View>
    )
}

TransactionFailedScreen.navigationOptions = () => {
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

export default TransactionFailedScreen