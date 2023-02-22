import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={TabNavigator} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default MainNavigator;
