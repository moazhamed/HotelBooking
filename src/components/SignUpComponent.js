import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import { Input } from 'react-native-elements';



const SignUpComponent = ({ navigation, onSignUp }) => {
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')



    return (
        <View>
            <Text style={styles.header}>Username</Text>
            <Input inputContainerStyle={styles.input}
                placeholder="Create your username"
                value={userName}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(newName) => setUserName(newName)}
            />
            <Text style={styles.header}>Email</Text>
            <Input inputContainerStyle={styles.input}
                placeholder="Enter your E-mail"
                value={userEmail}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(newEmail) => setUserEmail(newEmail)}
            />
            <Text style={styles.header}>Password</Text>
            <Input inputContainerStyle={styles.input}
                value={password}
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                rightIcon={
                    <Image source={require('../assets/eye.png')} />
                }
                secureTextEntry={true}
                onChangeText={(newPassword) => setPassword(newPassword)} />
            <TouchableOpacity style={styles.SignupT} onPress={() => {
                if (userName !== '' && userEmail !== '' && password !== '') {
                    onSignUp(userName, userEmail, password)
                } else {
                    ToastAndroid.show('All fields are mandatory', ToastAndroid.SHORT)
                }
            }}>
                <Text style={styles.signupTxt}>Sign Up</Text>
            </TouchableOpacity>
        </View >

    )

}


const styles = StyleSheet.create({
    header: {
        fontSize: 16,
        color: '#3E3E3E',
        marginTop: 40,
        marginLeft: 25
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 28,
        borderBottomWidth: 0,
        marginHorizontal: 15,
        marginTop: 10,
        paddingHorizontal: 20,
    },
    SignupT: {
        width: 325,
        height: 57,
        marginTop: 30,
        alignSelf: 'center',
        borderRadius: 28,
        backgroundColor: '#00A76E',
        padding: 15
    },
    signupTxt: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    passwordBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }

})

export default SignUpComponent