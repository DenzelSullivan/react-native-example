import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

type DataInfoProps = {
    title: string,
    imageUrl: string,
    description: string
}

const DataInfo = ({ route }) => {

    const { title, imageUrl, description } = route.params;

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Image
                style={styles.img}
                source={{ uri: imageUrl }} />
            <ScrollView>
                <Text style={styles.desc} >{description}</Text>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        alignSelf: 'center'
    },
    img: {
        width: 150,
        height: 150,
        marginTop: 25,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    desc: {
        fontSize: 25,
        margin: 10
    }
});

export default DataInfo;