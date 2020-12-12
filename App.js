import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import PreGameScreen from './components/screens/PreGameScreen';
import GameScreen from './components/screens/GameScreen'



export default function App() {

  const [userNumber, setUserNumber] = useState();

  const startGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <PreGameScreen onStart={startGame}/>
  if (userNumber) {
    content = <GameScreen userChoice={userNumber}/>
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
