import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { googleAPIKey } from '../api/GooglePlacesApi';




const DetailsScreen = ({ navigation }) => {

    const id = navigation.getParam('placeId')
    console.log("Place id is", id)
    var data = {}

    const url =
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&key=${googleAPIKey}`

    console.log("your URL", url)

    useEffect(async () => {
        await fetch(url)
            .then(res =>
                res.json()
            )
            .then(res => {
                console.log("first log", res)
                 data = res.results;
            })
        console.log("second log", data)
    })


    return (

        <View>
            <Text>DetailsScreen</Text>
        </View>

    )

}


const styles = StyleSheet.create({


})

export default DetailsScreen