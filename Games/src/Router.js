import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Library from './pages/Library';
import Game from './pages/Game';
import IconComponent from './components/İcon/İcon';


const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LibraryPages" component={Library}
                    options={{
                        title: "Free To Game Library",
                        headerStyle: { backgroundColor: '#d63031' },
                        headerTitleStyle: { color: 'white' },
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <IconComponent
                                name="book"
                                size={30}
                                color="white"
                            />
                        ),
                    }}
                />
                <Stack.Screen name="GamePages" component={Game}
                    options={{
                        title: "Game",
                        headerStyle: { backgroundColor: '#d63031' },
                        headerTitleStyle: { color: 'white' },
                        headerTitleAlign: 'center',
                        headerTintColor: 'white',
                        headerRight: () => (
                            <IconComponent
                                name="gamepad-variant"
                                size={30}
                                color="white"
                            />
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;