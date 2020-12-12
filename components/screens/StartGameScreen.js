import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../Card'
import Input from '../Input'
import Colors from '../../constants/colors';

const StartGameScreen = props => {

    const [inputValue, setInputValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const avoidInputNumber = inputText => {
        setInputValue(inputText.replace(/[^0-9]/g, ''))
    } 

    const resetInput = () => {
        setInputValue('');
        setConfirmed(false);
    }

    const confirmInput = () => {
        const chosenNumber = parseInt(inputValue);
        if (inputValue === '' || chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99){
            return
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setInputValue('');
    }


    let confirmedOutput = confirmed && <Text>Chosen number is: {selectedNumber}</Text>
    


    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='numeric' maxLength={2} onChangeText={avoidInputNumber} value={inputValue}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Reset' color='black' onPress={resetInput}/>
                        </View>
                        <View style={styles.button}>
                            <Button title='Confirm' color={Colors.primary} onPress={confirmInput}/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    tittle: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width:80
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
}) 


export default StartGameScreen;