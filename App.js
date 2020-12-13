import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import PreGameScreen from './components/screens/PreGameScreen';
import GameScreen from './components/screens/GameScreen';
import EndGameScreen from './components/screens/EndGameScreen';



export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [end, setEnd] = useState(false);

  const startGame = selectedNumber => {
    setUserNumber(selectedNumber);
  }

  const endGame = isEnd => {
    setEnd(isEnd)
  }

  // Display PreGame, Game or EndGame screen 
  let content = <PreGameScreen onStart={startGame}/>
  if (userNumber) {
    content = <GameScreen userChoice={userNumber} onEndGame={endGame}/>
  }
  if (end) {
    content = <EndGameScreen result={userNumber} />
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
