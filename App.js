import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Main from './Components/Main';
import  AddBd from './Components/AddBD/AddBD';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Стрельбы' }}
        />
        <Stack.Screen
          name="AddBd"
          component={AddBd}
          options={{ title: 'Детали стрельбы' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
