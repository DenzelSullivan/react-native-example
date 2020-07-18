import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Data from './components/Data';
import DataInfo from './components/DataInfo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Data">
        <Stack.Screen
          name="Data"
          component={Data} />
        <Stack.Screen
          name="DataInfo"
          component={DataInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
