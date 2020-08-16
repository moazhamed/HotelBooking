import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const HEADER_TXT = "Travel with no worry"
const SUB_HEADER_TXT = "You can now experience the next level travel experience for hotel bookings."

const OnBoardingScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Image source={require('../assets/onBoarding.png')} />
            <Text style={styles.header}>{HEADER_TXT}</Text>
            <Text style={styles.subHeader}>{SUB_HEADER_TXT}</Text>
            <TouchableOpacity style={styles.nextBT} onPress={() => { navigation.navigate('Login') }}>
                <Text style={styles.nextTxt}>Next</Text>
            </TouchableOpacity>
        </View>

    )

}

OnBoardingScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3E3E3E',
        marginTop: 33,
        marginStart: 25
    },
    subHeader: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'rgba(62, 62, 62, 0.8)',
        marginHorizontal: 25,
        marginTop: 20
    },
    nextBT: {
        width: 165,
        height: 57,
        marginTop: 40,
        marginHorizontal: 120,
        borderRadius: 28,
        backgroundColor: '#00A76E',
        padding: 15
    },
    nextTxt: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }

})

export default OnBoardingScreen