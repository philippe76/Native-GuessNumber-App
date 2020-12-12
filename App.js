import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './components/screens/StartGameScreen';
import GameScreen from './components/screens/GameScreen'



export default function App() {

  const [userChoice, setUserChoice] = useState();

  const startGame = (selectedNumber) => {
    setUserChoice(selectedNumber)
  }

  let content = <StartGameScreen onStart={startGame}/>
  if (userChoice) {
    content = <GameScreen userChoice={userChoice}/>
  }

  return (
    <View style={styles.screen}>
      <Header title={'Guess a Number'} />
      {content}      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
