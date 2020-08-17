import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({ navigation }) => {
    const userName = navigation.getParam('name')
    const places = navigation.getParam('hotels')


    const getPhotoUrl = (photoRefrence, width, height) => {
        return `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRefrence}&sensor=false&maxheight=${height}&maxwidth=${width}&key=AIzaSyBh7pnZlh6A6gFVzhrerLuykFtHMtNSP-M`
    }

    return (
        <View style={styles.container}>
            <FontAwesome5 name={'award'} style={styles.padge} onPress={() => navigation.navigate('Profile', {
                name: userName
            })} />
            <Text style={styles.header}>Good Morning, {userName}!</Text>
            <View style={styles.headerContainer}>
                <Text style={styles.selectedTitle}>Recomended</Text>
                <Text style={styles.title}>Popular</Text>
                <Text style={styles.title}>Trending</Text>
            </View>
            <FlatList
                data={places}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={place => place.placeId}
                renderItem={({ item }) => {
                    try {
                        let photo = item.photos[0]
                        console.log("Flat list item", item.photos)
                        return <TouchableOpacity onPress={() => navigation.navigate('Description', {
                            placeId: item.placeId,
                            photoRefrence: photo.photo_reference,
                            height: photo.height,
                            width: photo.width,
                            name: item.placeName,
                            vincinty: item.vicinity,
                            rating: item.rating
                        })} >
                            <Image style={styles.image}
                                source={{ uri: getPhotoUrl(photo.photo_reference, photo.height, photo.width) }}></Image>
                            <View style={styles.textContaner}>
                                <Text style={styles.hotelDetails}>{item.placeName}</Text>
                                <Text style={styles.hoteAddress}>{item.vicinity}</Text>
                            </View>
                            <View style={styles.rating}>
                                <FontAwesome5 name={'star'} style={styles.star} color='gold' />
                                <Text style={{ color: 'white' }}>{item.rating}</Text>
                            </View>
                        </TouchableOpacity>
                    } catch (err) {
                        console.log(err)
                    }
                }}
            >
            </FlatList>
        </View>
    )
}

HomeScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        justifyContent: 'space-around'

    },
    header: {
        color: '#3E3E3E',
        fontWeight: 'bold',
        fontSize: 28,
        marginTop: 17,
        marginStart: 25,
        width: 220,
    },
    headerContainer: {
        flexDirection: 'row',
        padding: 40,
        justifyContent: 'space-between',
    },
    selectedTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3E3E3E'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#A9A9A9',
    },
    image: {
        width: 256,
        height: 424,
        marginStart: 21,
        marginRight: 25,
        borderRadius: 25
    },
    hotelDetails: {
        fontSize: 20,
        color: 'white',
        marginEnd: 25,
        fontWeight: 'bold'
    },
    hoteAddress: {
        fontSize: 14,
        color: 'white',
        marginBottom: 17,
        marginEnd: 25
    },
    textContaner: {
        flexDirection: 'column',
        position: "absolute",
        marginBottom: 80,
        marginEnd: 10,
        bottom: 0,
        left: 0,
        marginStart: 46,
    },
    rating: {
        right: 0,
        top: 0,
        backgroundColor: 'rgba(62, 62, 62, 0.6)',
        borderRadius: 20,
        padding: 10,
        position: "absolute",
        color: 'white',
        marginTop: 20,
        flexDirection: 'row',
        marginEnd: 40
    },
    padge: {
        alignSelf: 'flex-end',
        marginEnd: 27,
        marginTop: 64,
        width: 24,
        height: 24
    },
    star: {
        marginEnd: 5
    }

})

export default HomeScreen