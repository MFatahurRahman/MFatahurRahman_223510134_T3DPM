import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TeamControl from './TeamControl';

export default function Scoreboard({ teamA, teamB, scoreA, scoreB, setScoreA, setScoreB, onWin }) {
  const handleScoreUpdate = (team, change) => {
    if (team === 'A') {
      const newScore = Math.max(scoreA + change, 0);
      setScoreA(newScore);
      if (newScore >= 10) onWin(teamA);
    } else {
      const newScore = Math.max(scoreB + change, 0);
      setScoreB(newScore);
      if (newScore >= 10) onWin(teamB);
    }
  };

  return (
    <View style={styles.scoreboard}>
    <TeamControl
      name={teamA}
      score={scoreA}
      onScoreChange={(change) => handleScoreUpdate('A', change)}
      logo={require('../../assets/Man Utd.png')}
    />
    <Text style={styles.vsText}>VS</Text>
    <TeamControl
      name={teamB}
      score={scoreB}
      onScoreChange={(change) => handleScoreUpdate('B', change)}
      logo={require('../../assets/Wolverhampton Wanderers F.C..png')}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  scoreboard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  vsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
