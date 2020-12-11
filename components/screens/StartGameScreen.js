import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from '../Card'
import Input from '../Input'
import Colors from '../../constants/colors';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Reset' color={Colors.secondary} onPress={() => {}}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Confirm' color={Colors.primary} onPress={() => {}}/>
                    </View>
                </View>
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