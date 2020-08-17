import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




const BookingsScreen = ({ navigation }) => {
    const getPhotoUrl = () => {
        return `https://maps.googleapis.com/maps/api/place/photo?photoreference=CmRaAAAAl3rPDMOaDJbCPil-lGH9VZYxaLivIs3eTYVsKNB5z2V8mur1oQxqim1YSW7yjNnlt4NN4FebY4fQpD3S7oj8bW4ZZ5Pg9nfNhGJCC5W9FKhRDDbsHinRbw13M-POigLLEhCAk_TidbfP9kZU7dxPErn0GhTVrjSjoCYSB3I12oL_qLMLw8MoBg&sensor=false&maxheight=667&maxwidth=1000&key=AIzaSyBh7pnZlh6A6gFVzhrerLuykFtHMtNSP-M`
    }

    return (
        // <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.image}
                source={{ uri: getPhotoUrl() }}></Image>
            <View >
                <Text style={styles.title}>Tropicasa De Hotel</Text>
                <Text style={styles.subTitle}>Amsterdam, Netherlands</Text>
                <View style={styles.smallRow}>
                    <FontAwesome5 name={'star'} style={styles.star} />
                    <Text style={{ color: 'gold' }}> 4.6</Text>
                    <Text style={{ color: '#A9A9A9' }} >(1763 Reviews)</Text>
                </View>
            </View>

            {/* 
            <Image style={styles.image}
                source={{ uri: getPhotoUrl() }}></Image>
            <View >
                <Text style={styles.title}>Tropicasa De Hotel</Text>
                <Text style={styles.subTitle}>Amsterdam, Netherlands</Text>
                <View style={styles.smallRow}>
                    <FontAwesome5 name={'star'} style={styles.star} />
                    <Text style={{ color: 'gold' }}> 4.6</Text>
                    <Text style={{ color: '#A9A9A9' }} >(1763 Reviews)</Text>
                </View>
            </View>
            <Image style={styles.image}
                source={{ uri: getPhotoUrl() }}></Image>
            <View >
                <Text style={styles.title}>Tropicasa De Hotel</Text>
                <Text style={styles.subTitle}>Amsterdam, Netherlands</Text>
                <View style={styles.smallRow}>
                    <FontAwesome5 name={'star'} style={styles.star} />
                    <Text style={{ color: 'gold' }}> 4.6</Text>
                    <Text style={{ color: '#A9A9A9' }} >(1763 Reviews)</Text>
                </View>
            </View> */}
            {/* </View> */}
        </View>

    )
}




const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    imageContainer: {
        backgroundColor: 'white',
        marginHorizontal: 25,
        borderRadius: 12,
        marginTop: 10,
        padding: 15,
    },
    image: {
        width: 95,
        height: 95,
        borderRadius: 8
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
})

export default BookingsScreen