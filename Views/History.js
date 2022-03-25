import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const History = () => {
  return (
    <View style={styles.container}>
      <Text>This is the History screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default History;
