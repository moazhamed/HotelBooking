import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { googleAPIKey } from '../api/GooglePlacesApi';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'native-base';





const DetailsScreen = ({ navigation }) => {
    const [placeInfo, setPlaceInfo] = useState({})
    const [hasError, setErrors] = useState(false);

    const id = navigation.getParam('placeId')
    const photoRefrence = navigation.getParam('photoRefrence')
    const height = navigation.getParam('height')
    const width = navigation.getParam('width')

    const getPhotoUrl = (photoRefrence, width, height) => {
        return `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRefrence}&sensor=false&maxheight=${height}&maxwidth=${width}&key=AIzaSyBh7pnZlh6A6gFVzhrerLuykFtHMtNSP-M`
    }
    const url =
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&key=${googleAPIKey}`

    async function fetchData() {
        const res = await fetch(url)
        res.json()
            .then(res => setPlaceInfo(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <View style={{ backgroundColor: '#E5E5E5', flex: 1 }}>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                    source={{ uri: getPhotoUrl(photoRefrence, height, width) }}></Image>
                {/* {placeInfo && <Text style={styles.text}>{placeInfo.result.name} </Text>} */}
                <View >
                    <Text style={styles.title}>Tropicasa De Hotel</Text>
                    <Text style={styles.subTitle}>Amsterdam, Netherlands</Text>
                    <View style={styles.smallRow}>
                        <FontAwesome5 name={'star'} style={styles.star} />
                        <Text style={{ color: 'gold' }}> 4.6</Text>
                        <Text style={{ color: '#A9A9A9' }} >(1763 Reviews)</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.description}>
                Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are always maintaning the quality for better rating and high attitude service for you.
           </Text>
            <Text style={styles.description}>
                Tropicasa De Hotel located in a strategic location, only 6 Km from the airport and 1 Km from the train station. The hotel located in the middle of the city so you can enjoy the city and see something nearby.
        </Text>
            <Text style={styles.description}>
                You will be welcomed amongst olive trees, citron trees and magnolias, in gardens that hide exotic plants and in a wonderful outdoor pool with deck chairs.
         </Text>
            <TouchableOpacity style={styles.bookBT} onPress={() => { navigation.navigate('Booking') }}>
                <Text style={styles.signupTxt}>Book</Text>
            </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: 'white',
        marginHorizontal: 25,
        borderRadius: 12,
        marginTop: 10,
        padding: 15,
        flexDirection: 'row'
    },
    image: {
        width: 95,
        height: 95,
        borderRadius: 8
    },
    text: {
        color: 'black',
        fontSize: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginStart: 15,
        color: '#3E3E3E'
    },
    subTitle: {
        color: 'rgba(62, 62, 62, 0.6)',
        marginStart: 15,
        marginTop: 10
    },
    star: {
        color: 'gold',
    },
    smallRow: {
        flexDirection: 'row',
        marginStart: 15,
        marginTop: 10,
        justifyContent: 'space-between'
    },
    description: {
        fontSize: 16,
        color: 'rgba(62, 62, 62, 0.8)',
        marginHorizontal: 25,
        marginVertical: 12
    },
    signupTxt: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    bookBT: {
        width: 165,
        height: 57,
        alignSelf: 'center',
        borderRadius: 28,
        marginTop: 35,
        backgroundColor: '#00A76E',
        padding: 15,
    },

})

export default DetailsScreen