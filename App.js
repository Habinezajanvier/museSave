import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home, { HomeHeader } from './Views/Home';
import PlayScreen from './Views/Play';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: () => <HomeHeader /> }}
        />
        <Stack.Screen
          name="PlayScreen"
          component={PlayScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return <Navigations />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
