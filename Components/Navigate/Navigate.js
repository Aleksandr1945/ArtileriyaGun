import * as React from 'react';
import { addBd } from '../AddBD/AddBD' 
import { Main } from '../Main'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator

export default function Navigete() {
  return  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Add'
        component={addBd}
        options={{title: 'Добавление элементов'}}
      />
      <Stack.Screen
        name='Main'
        components={Main}
        options={{title: 'Главная'}}
      />
      
    </Stack.Navigator>
  </NavigationContainer>
}



