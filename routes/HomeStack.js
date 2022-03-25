import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Views/Home';
import PlayScreen from '../Views/Play';
import HomeHeader from '../components/HomeHeader';

const Stack = createNativeStackNavigator();

const HomeNavigations = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShadowVisible: false,
          headerTitle: () => <HomeHeader />,
        }}
      />
      <Stack.Screen
        name="PlayScreen"
        component={PlayScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigations;
