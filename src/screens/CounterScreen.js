import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    return {...state, counter: state.counter + action.payload };
}

const CounterScreen = () => {
    const[state, dispatch] = useReducer(reducer, { counter: 0 });
    const { counter } = state;
    
    return (
        <View>
            <Button 
                title='Increase'
                onPress={() => {
                   dispatch({ type: 'change_increase', payload: 1});
                }}
            />
            <Button 
                title='Decrease'
                onPress={() => {
                    dispatch({ type: 'change_decrease', payload: -1});
                }}
            />
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;