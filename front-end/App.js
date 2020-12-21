import React from 'react';
import { View, Text } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import DoarLivroScreen from './src/screens/DoarLivroScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen}
                />

                <Stack.Screen
                    name="DoarLivro"
                    component={DoarLivroScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;