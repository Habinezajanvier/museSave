import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeNavigations from './HomeStack';
import Settings from '../Views/Artists';
import History from '../Views/History';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Artists') {
            iconName = focused
              ? 'people'
              : 'people-outline';
          } else if (route.name === 'History') {
            iconName = focused
              ? 'bookmarks'
              : 'bookmarks-outline';
          }

          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: '#3C8F8A',
        tabBarInactiveTintColor: '#3C8F8A',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigations}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Artists" component={Settings} />
    </Tab.Navigator>
  );
};

export default Tabs;
