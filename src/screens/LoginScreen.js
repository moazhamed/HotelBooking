import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Dimensions, ToastAndroid } from 'react-native'
import SignInComponent from '../components/SignInComponent';
import SignUpComponent from '../components/SignUpComponent';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import auth from '@react-native-firebase/auth';
import { googleAPIKey } from '../api/GooglePlacesApi';



const LoginScreen = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const latitude = 37.773972;
    const longitude = -122.431297;
    let radius = 4 * 1000;
    const [routes] = useState([
        { key: 'first', title: 'Log In' },
        { key: 'second', title: 'Sign Up' },
    ]);
    let places = []

    const url =
        'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
        latitude +
        ',' +
        longitude +
        '&radius=' +
        radius +
        '&key=' + googleAPIKey;

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(res => {
                for (let googlePlace of res.results) {
                    var place = {};
                    place['placeId'] = googlePlace.place_id;
                    place['placeName'] = googlePlace.name;
                    place['photos'] = googlePlace.photos;
                    place['vicinity'] = googlePlace.vicinity;
                    place['rating'] = googlePlace.rating;
                    places.push(place);
                    console.log('Hotels', places)
                }
            })
            .catch(error => {
                console.log(error);
            });
    })


    const FirstRoute = () => (
        <SignInComponent navigation={navigation} onLogin={(userName, userEmail, password) => {
            auth()
                .signInWithEmailAndPassword(userEmail, password)
                .then(() => {
                    ToastAndroid.show('User account signed in!', ToastAndroid.SHORT);
                    navigation.navigate('Home', {
                        name: userName,
                        hotels: places
                    })
                })
                .catch(error => {
                    if (error.code === 'auth/invalid-email') {
                        ToastAndroid.show('That email address is invalid!', ToastAndroid.SHORT);
                    }
                    console.error(error);
                });
            // navigation.navigate('Home', {
            //     name: userName,
            //     hotels: places
            // })
        }
        } />
    );

    const SecondRoute = () => (
        <SignUpComponent navigation={navigation} onSignUp={(userName, userEmail, password) => {
            //TODO need to create credentials first then if success , navigate to home
            auth()
                .createUserWithEmailAndPassword(userEmail, password)
                .then(() => {
                    ToastAndroid.show('User account created & signed in!', ToastAndroid.SHORT);
                    navigation.navigate('Home', {
                        name: userName,
                        hotels: places
                    })
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        ToastAndroid.show('That email address is already in use!', ToastAndroid.SHORT);
                    }
                    if (error.code === 'auth/invalid-email') {
                        ToastAndroid.show('That email address is invalid!', ToastAndroid.SHORT);
                    }
                    console.error(error);
                });
        }} />
    );
    const initialLayout = { width: Dimensions.get('window').width };
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-green.png')} />
            <TabView
                style={styles.tabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            >
            </TabView>

        </View>

    )
}
LoginScreen.navigationOptions = () => {
    return {
        header: () => false
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    logo: {
        alignSelf: 'center',
        marginTop: 21,
        marginBottom: 40
    },
    subContainer: {
        backgroundColor: 'red'
    },
    tabBar: {
        color: 'red',
        overlayColor: 'red',
        tintColor: 'red'
    }

})

export default LoginScreen