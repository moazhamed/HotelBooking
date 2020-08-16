import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
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
            <FontAwesome5 name={'award'} style={styles.padge} onPress={() => navigation.navigate('Profile')} />
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
                renderItem={({ item }) => {
                    let photo = item.photos[0]
                    return <TouchableOpacity onPress={() => navigation.navigate('Description', {
                        placeId: item.placeId
                    })} >
                        <Image style={styles.image}
                            source={{ uri: getPhotoUrl(photo.photo_reference, photo.height, photo.width) }}></Image>
                        <View style={styles.textContaner}>
                            <Text style={styles.hotelDetails}>{item.placeName}</Text>
                            <Text style={styles.hoteAddress}>{item.vicinity}</Text>
                        </View>
                        <Text style={styles.rating}>{item.rating}</Text>
                    </TouchableOpacity>
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
        backgroundColor: '#E5E5E5'
    },
    header: {
        color: '#3E3E3E',
        fontWeight: 'bold',
        fontSize: 28,
        marginTop: 37,
        marginStart: 25,
        width: 220,
    },
    headerContainer: {
        flexDirection: 'row',
        padding: 40,
        justifyContent: 'space-between',
        marginTop: 20
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
        marginBottom: 50,
        position: "absolute",
        bottom: 0,
        left: 0,
        marginStart: 46,
    },
    rating: {
        right: 0,
        top: 0,
        position: "absolute",
        color: 'white',
        marginTop: 20,
        marginEnd: 40
    },
    padge: {
        alignSelf: 'flex-end',
        marginEnd: 27,
        marginTop: 64,
        width: 24,
        height: 24
    }

})

export default HomeScreen