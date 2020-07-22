import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxSceen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        height: 200,
        borderColor: 'black',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
    }
});

export default BoxSceen;