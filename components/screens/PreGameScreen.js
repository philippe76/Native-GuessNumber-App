import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Colors from '../../constants/colors';
import Card from '../Card';
import Input from '../Input';
import NumberContainer from '../NumberContainer';



const StartGameScreen = props => {

    const [inputValue, setInputValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const avoidInputError = inputText => {
        setInputValue(inputText.replace(/[^0-9]/g, ''))
    } 

    const resetInput = () => {
        setInputValue('');
        setConfirmed(false);
    }

    const confirmInput = () => {
        const chosenNumber = parseInt(inputValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInput}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setInputValue('');
        Keyboard.dismiss();
    }



    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.outputChoice}>
                <Text> You selected: </Text>     
                <NumberContainer> {selectedNumber} </NumberContainer>
                <Button color='#4169e1' title='START GAME' onPress={()=> {props.onStart(selectedNumber)}}/>
            </Card>
        )
    } 
    

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='numeric' onChangeText={avoidInputError} value={inputValue}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Reset' color='#696969' onPress={resetInput}/>
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
    },
    outputChoice: {
        marginTop: 20,
        alignItems: 'center'
    }
}) 


export default StartGameScreen;