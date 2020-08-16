import { StyleSheet } from 'react-native'
import React from 'react';
import { Card, CardItem, Text, View, } from 'native-base';
import { Avatar, Accessory } from 'react-native-elements';




const ProfileScreen = () => {

    return (

        <View style={{ alignItems: 'center', backgroundColor: '#fcfcfc', flex: 1, paddingTop: 50 }}>
            <Avatar size="large"
                rounded
                source={{
                    uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                }}
            >
                <Accessory />
            </Avatar>

            <View style={{ marginTop: 20, alignItems: 'center', marginBottom: 40 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Fat7i</Text>
                <Text style={{ color: 'grey' }}>Egypt</Text>

            </View>

            <Card transparent>
                <CardItem transparent  >
                    <Text style={{ marginRight: 90, marginLeft: 10 }}>47</Text>
                    <Text style={{ marginRight: 80 }}>75</Text>
                    <Text >2</Text>
                </CardItem>
                <CardItem transparent >
                    <Text style={{ marginRight: 15, fontSize: 15, }}>Reviews</Text>
                    <Text style={{ marginRight: 15, fontSize: 15, }}>Transactions</Text>
                    <Text style={{ fontSize: 15, }}>Bookings</Text>
                </CardItem>
            </Card>
            <View style={{ marginTop: 20, marginBottom: 40, marginRight: 200 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Options</Text>
            </View>


        </View>


    )

}


const styles = StyleSheet.create({


})

export default ProfileScreen