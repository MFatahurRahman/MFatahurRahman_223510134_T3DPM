import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#FF6363',
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
