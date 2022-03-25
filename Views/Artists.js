import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ArtistScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Artists screen</Text>
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

export default ArtistScreen;
