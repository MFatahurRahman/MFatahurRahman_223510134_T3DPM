import React, { useState } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import Header from '../components/Header';
import Scoreboard from '../components/Scoreboard';

export default function MainScreen() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const resetGame = () => {
    setScoreA(0);
    setScoreB(0);
  };

  const handleWin = (team) => {
    Alert.alert('We Have a Winner!', `${team} has won the game!`);
    resetGame();
  };

  return (
    <View style={styles.screen}>
      <Header title="Live Score Futsal" />
      <Scoreboard
        teamA="Team A"
        teamB="Team B"
        scoreA={scoreA}
        scoreB={scoreB}
        setScoreA={setScoreA}
        setScoreB={setScoreB}
        onWin={handleWin}
      />
      <Text style={styles.resetHint}>Swipe down to reset scores.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1e1e2d',
  },
  resetHint: {
    marginTop: 10,
    fontSize: 12,
    color: '#bbbbbb',
    fontStyle: 'italic',
  },
});
