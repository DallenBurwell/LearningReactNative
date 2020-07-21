import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newVal) => setPassword(newVal)}
            />
            {password.length < 6 ? <Text style={styles.red}>Password must be longer than 5 characters</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    red: {
        color: 'red'
    }
});
export default TextScreen;