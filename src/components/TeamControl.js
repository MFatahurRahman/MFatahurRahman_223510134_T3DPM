import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function TeamControl({ name, score, onScoreChange, logo }) {
  return (
    <View style={styles.teamControl}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.teamName}>{name}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttons}>
        <Button title="+" onPress={() => onScoreChange(1)} />
        <Button title="-" onPress={() => onScoreChange(-1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  teamControl: {
    alignItems: 'center',
    backgroundColor: '#2D2D44',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    width: 120,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFCB77',
    marginTop: 5,
  },
  score: {
    fontSize: 24,
    color: '#fff',
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
