import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import DoarLivroScreen from './src/screens/DoarLivroScreen';
import RetirarLivroScreen from './src/screens/RetirarLivroScreen';
import DevolverLivroScreen from './src/screens/DevolverLivro';

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

                <Stack.Screen
                    name="RetirarLivro"
                    component={RetirarLivroScreen}
                />

                <Stack.Screen
                    name="DevolverLivro"
                    component={DevolverLivroScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;