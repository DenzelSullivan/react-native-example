import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

type Category = {
    id: string,
    strCategory: string,
    strCategoryThumb: string,
    strCategoryDescription: string
}

type CategoryState = {
    data: Category[]
}

export default class Data extends React.Component {

    state: CategoryState = {
        data: []
    }

    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((response) => response.json())
            .then((json) => {
                // console.log(json.categories[0])
                this.setState({ data: json.categories });
            })
            .catch((error) => console.error(error))
    }

    render() {
        return (
            <>
                <ScrollView>
                    {this.state.data.map(category => (
                        <View key={category.id} style={styles.view}>
                            <Image
                                style={styles.img}
                                source={{ uri: category.strCategoryThumb }} />
                            <Text style={styles.text}>{category.strCategory}</Text>
                        </View>
                    ))}
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row'
    },
    img: {
        width: 75,
        height: 75,
        margin: 3,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold'
    }
});