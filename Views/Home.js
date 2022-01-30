import { StatusBar } from 'expo-status-bar';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>MuseScore</Text>
          <Button title="Add" color="#3C8F8A" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  header: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    fontSize: 24,
    color: '#3C8F8A',
  },
});
