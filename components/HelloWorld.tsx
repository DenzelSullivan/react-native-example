import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class HelloWorld extends React.Component {
    render() {
        return (
            <>
                <View style={styles.hello}>
                    <Text>Hello, world!</Text>
                </View>
                <View style={styles.sm} />
                <View style={styles.med} />
                <View style={styles.large} />
            </>
        )
    }
}

const styles = StyleSheet.create({
    hello: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center"
    },
    sm: {
        flex: 1,
        backgroundColor: 'powderblue'
    },
    med: {
        flex:2,
        backgroundColor: 'skyblue'
    },
    large: {
        flex:3,
        backgroundColor: 'steelblue'
    }
});
