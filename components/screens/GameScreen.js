import React, { useState, useRef } from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
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

    const [computerGuess, setComputerGuess] = useState(getRandomGuess(1, 100, props.userChoice));
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const makeNextGuess = updown => {
        if ((updown === 'lower' && computerGuess < props.userChoice) || (updown === 'greater' && computerGuess > props.userChoice)) {
            Alert.alert('Are you sure ?', 'This doesn\'t seem to be a good hint...', [{text:'Sorry!'}])
        }
        if (updown === 'lower') {
            currentHigh.current = computerGuess; 
        }
        else {
            currentLow.current = computerGuess;
        }
        let nextNumber = getRandomGuess(currentLow.current, currentHigh.current, computerGuess);
        setComputerGuess(nextNumber)
    }
 
    return (
        <View style={styles.screen}>
            <Text>Computer's guess</Text>
            <NumberContainer> {computerGuess} </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={makeNextGuess.bind(this, 'lower')}/>
                <Button title="GREATER" onPress={makeNextGuess.bind(this, 'greater')}/>
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