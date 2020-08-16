import React, { useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'



const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(
            () => {
                navigation.navigate("Onboarding");
            }, 2000)
    }
    )

    return (
        <View style={styles.container}>
            <Image style={styles.bg1} source={require('../assets/bg1.png')} />
            <Image style={styles.logo} source={require('../assets/splash.png')} />
            <Image style={styles.bg2} source={require('../assets/bg2.png')} />
        </View>
    )
}


SplashScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00A76E',
    },
    logo: {
        alignSelf: 'center',
    },
    bg1: {
        alignSelf: 'flex-start'
    },
    bg2: {
        alignSelf: 'flex-end'
    }
})

export default SplashScreen