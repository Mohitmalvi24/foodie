import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ClipboardList, Search, Home, Grid, User } from 'lucide-react-native';
import { HomeScreen, MenuScreen } from '../screens';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

const PlaceholderScreen = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{name} Screen</Text>
  </View>
);

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.primary,
          borderTopWidth: 0,
          height: 100,
          paddingTop: 8,
        },
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: 'rgba(255,255,255,0.6)',
        tabBarLabelStyle: {
          fontSize: 12,
          paddingTop: 5,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="Orders"
        component={() => <PlaceholderScreen name="Orders" />}
        options={{
          tabBarIcon: ({ color }) => <ClipboardList color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={() => <PlaceholderScreen name="Search" />}
        options={{
          tabBarIcon: ({ color }) => <Search color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Home color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color }) => <Grid color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={() => <PlaceholderScreen name="Profile" />}
        options={{
          tabBarIcon: ({ color }) => <User color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};
