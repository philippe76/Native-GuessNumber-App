import React, { useState } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Card from '../Card'
import NumberContainer from '../NumberContainer';


const getRandomGuess = (min, max, solution) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomGuess = Math.floor(Math.random() * (max - min)) + min;
    if (randomGuess === solution) {
        return getRandomGuess(min, max, solution)
    }
    else {
        return randomGuess
    }
}



const GameScreen = props => {


    const [computerGuess, setComputerGuess] = useState(getRandomGuess(1, 100, props.userChoice))

    return (
        <View style={styles.screen}>
            <Text>Computer's guess</Text>
            <NumberContainer> {computerGuess} </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => {}}/>
                <Button title="GREATER" onPress={() => {}}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})


export default GameScreen;