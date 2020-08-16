import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import { Input } from 'react-native-elements';

const SignInComponent = ({ navigation, onLogin }) => {
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

    return (

        <View style={styles.container}>
            <Text style={styles.header}>Username</Text>
            <Input inputContainerStyle={styles.input}
                placeholder="Enter your username"
                value={userName}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(newName) => setUserName(newName)}
            />
            <Text style={styles.header}>User E-mail</Text>
            <Input inputContainerStyle={styles.input}
                value={userEmail}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="User E-mail"
                onChangeText={(newEmail) => setUserEmail(newEmail)} />

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
            <TouchableOpacity >
                <Text style={styles.forget}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBT} onPress={() => {
                if (userEmail !== '' && userName !== '' && password !== '') {
                    onLogin(userName, userEmail, password)
                }
                else {
                    ToastAndroid.show('All fields are mandatory', ToastAndroid.SHORT);
                }
            }}>
                <Text style={styles.loginTxt}>Login</Text>
            </TouchableOpacity>
        </View >

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
    header: {
        fontSize: 16,
        color: '#3E3E3E',
        marginLeft: 25
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 28,
        marginHorizontal: 15,
        borderBottomWidth: 0,
        paddingHorizontal: 20,
    },
    forget: {
        alignSelf: 'flex-end',
        marginEnd: 25,
        color: 'rgba(62, 62, 62, 0.8)'
    },
    loginBT: {
        width: 325,
        height: 57,
        alignSelf: 'center',
        borderRadius: 28,
        backgroundColor: '#00A76E',
        padding: 15,
    },
    loginTxt: {
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

export default SignInComponent