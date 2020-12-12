import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../constants/colors';


const NumberContainer = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.number}> {props.children} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 2,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
     number: {
         fontSize: 22,
         color: Colors.primary,
     }
})

export default NumberContainer;