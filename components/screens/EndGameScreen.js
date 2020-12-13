import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../Card'


const EndGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Card>
                <Text>Well Done !! Number was {props.result}</Text>
            </Card>            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default EndGameScreen;