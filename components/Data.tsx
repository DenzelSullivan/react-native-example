import React from 'react';
import {
    StyleSheet, View, Text, Image, ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

type Category = {
    id: string,
    strCategory: string,
    strCategoryThumb: string,
    strCategoryDescription: string
}

type CategoryState = {
    data: Category[]
}

class Data extends React.Component {

    state: CategoryState = {
        data: []
    }

    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json.categories });
            })
            .catch((error) => console.error(error))
    }

    onClick(data: Category){
        this.props.navigation.navigate('DataInfo', {
            title: data.strCategory,
            imageUrl: data.strCategoryThumb,
            description: data.strCategoryDescription
        })
    }

    render() {
        return (
            <>
                <ScrollView>
                    {this.state.data.map(category => (
                        <TouchableWithoutFeedback
                            onPress={() => this.onClick(category)}>
                            <View key={category.id} style={styles.view}>
                                <Image
                                    style={styles.img}
                                    source={{ uri: category.strCategoryThumb }} />
                                <Text style={styles.text}>{category.strCategory}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </ScrollView>
            </>
        )
    }
}

export default withNavigation(Data);

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row'
    },
    img: {
        width: 75,
        height: 65,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginStart: 10
    }
});