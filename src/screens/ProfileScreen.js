import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import auth from '@react-native-firebase/auth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


auth()
    .signOut()
    .then(() => console.log('User signed out!'));



const ProfileScreen = ({ navigation }) => {
    const userName = navigation.getParam('name')
    const signOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    return (

        <View style={{ backgroundColor: '#fcfcfc', flex: 1, justifyContent: 'space-around' }}>
            <Image
                style={{ width: 90, height: 90, alignSelf: 'center', borderRadius: 45 }}
                source={{
                    uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                }}
            >
            </Image>

            <View style={{ alignItems: 'center', marginBottom: 40 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{userName}</Text>
                <Text style={{ color: 'grey' }}>Indonesia</Text>
            </View>
            <View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <Text style={{ color: '#00A76E', fontSize: 28, }}>47</Text>
                    <Text style={{ color: '#00A76E', fontSize: 28 }}>75</Text>
                    <Text style={{ color: '#00A76E', fontSize: 28 }} >2</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 15, }}>Reviews</Text>
                    <Text style={{ fontSize: 15, }}>Transactions</Text>
                    <Text style={{ fontSize: 15 }}>Bookings</Text>
                </View>
            </View>
            <View style={{ alignSelf: 'flex-start', marginStart: 25 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Options</Text>
            </View>
            <View >
                <TouchableOpacity style={styles.tabContainer}>

                    <FontAwesome5 name={'award'} style={styles.icon} />
                    <Text style={styles.options}>User Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabContainer} onPress={() => {
                    signOut()
                    navigation.navigate('Login')
                }}>

                    <FontAwesome5 name={'sign-out-alt'} style={styles.icon} />
                    <Text style={styles.options}>Logout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabContainer} onPress={() => { navigation.navigate('Bookings') }}>

                    <FontAwesome5 name={'check-circle'} style={styles.icon} />
                    <Text style={styles.options}>Bookings</Text>

                </TouchableOpacity>


            </View>

        </View>


    )

}


const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'black',
        padding: 15,
        flexDirection: 'row',
        marginHorizontal: 25,
        marginVertical: 15
    },
    options: {
        color: '#3E3E3E',
        fontSize: 16
    },
    icon: {
        width: 30,
        height: 30
    }

})

export default ProfileScreen